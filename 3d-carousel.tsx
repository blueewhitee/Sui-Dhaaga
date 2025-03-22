"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion"

// Custom hook for isomorphic layout effect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

// Custom hook for media queries
type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// Sample colorful textile design images
const textileDesigns = [
  "https://picsum.photos/seed/textile1/400/400?pink",
  "https://picsum.photos/seed/textile2/400/400?purple",
  "https://picsum.photos/seed/textile3/400/400?teal",
  "https://picsum.photos/seed/textile4/400/400?yellow",
  "https://picsum.photos/seed/textile5/400/400?blue",
  "https://picsum.photos/seed/textile6/400/400?green",
  "https://picsum.photos/seed/textile7/400/400?red",
  "https://picsum.photos/seed/textile8/400/400?orange",
  "https://picsum.photos/seed/textile9/400/400?pink",
  "https://picsum.photos/seed/textile10/400/400?purple",
  "https://picsum.photos/seed/textile11/400/400?teal",
  "https://picsum.photos/seed/textile12/400/400?yellow",
]

// Animation constants
const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

// Carousel component
const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
    autoRotate,
    setAutoRotate,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
    autoRotate: boolean
    setAutoRotate: (value: boolean) => void
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`)

    // Auto rotation
    useEffect(() => {
      if (!autoRotate || !isCarouselActive) return

      let animationId: number
      const rotateCarousel = () => {
        rotation.set(rotation.get() + 0.15) // Slightly slower rotation for better viewing
        animationId = requestAnimationFrame(rotateCarousel)
      }

      animationId = requestAnimationFrame(rotateCarousel)

      return () => {
        cancelAnimationFrame(animationId)
      }
    }, [autoRotate, isCarouselActive, rotation])

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        onMouseEnter={() => setAutoRotate(false)}
        onMouseLeave={() => setAutoRotate(true)}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) => {
            if (isCarouselActive) {
              setAutoRotate(false)
              rotation.set(rotation.get() + info.offset.x * 0.05)
            }
          }}
          onDragEnd={(_, info) => {
            if (isCarouselActive) {
              controls.start({
                rotateY: rotation.get() + info.velocity.x * 0.05,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  mass: 0.1,
                },
              })
              // Resume auto-rotation after a short delay
              setTimeout(() => setAutoRotate(true), 2000)
            }
          }}
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.div
                className="w-full h-full rounded-xl overflow-hidden border-4 border-pink-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={imgUrl}
                  alt={`Textile design ${i + 1}`}
                  layoutId={`img-${imgUrl}`}
                  className="pointer-events-none w-full h-full object-cover"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  },
)

// Main component
export default function ThreeDCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [autoRotate, setAutoRotate] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(() => textileDesigns, [])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    setAutoRotate(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
    setAutoRotate(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl backdrop-blur-sm"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div className="relative max-w-full max-h-full rounded-lg shadow-lg border-8 border-pink-300">
              <motion.img
                layoutId={`img-${activeImg}`}
                src={activeImg}
                className="max-w-full max-h-full rounded-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
              <motion.div
                className="absolute top-4 right-4 bg-pink-500 rounded-full p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
        />
      </div>
    </motion.div>
  )
}


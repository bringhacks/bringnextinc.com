'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getTransformStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return { transform: 'translateY(2rem)', opacity: 0 }
        case 'down':
          return { transform: 'translateY(-2rem)', opacity: 0 }
        case 'left':
          return { transform: 'translateX(2rem)', opacity: 0 }
        case 'right':
          return { transform: 'translateX(-2rem)', opacity: 0 }
        case 'fade':
          return { opacity: 0 }
        default:
          return { transform: 'translateY(2rem)', opacity: 0 }
      }
    }
    return { transform: 'translateY(0) translateX(0)', opacity: 1 }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{ ...getTransformStyles(), transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

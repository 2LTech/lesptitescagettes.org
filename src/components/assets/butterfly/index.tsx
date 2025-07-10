'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Bezier } from 'bezier-js'

import styles from './index.module.css'

export interface Color {
  base: string
  border: string
  dot1: string
  dot2: string
}

const colorsShapes: Color[] = [
  {
    base: '#cbbba0',
    border: '#be1823',
    dot1: '#02a19a',
    dot2: '#e94f1d',
  },
  {
    base: '#ad1d94',
    border: '#be1823',
    dot1: '#3bab9b',
    dot2: '#f14625',
  },
  {
    base: '#b01c27',
    border: '#be1823',
    dot1: '#3bab9b',
    dot2: '#f9a72b',
  },
]

/**
 * Set points
 * @param lastPoint Last point
 * @param width Width
 * @param height Height
 * @returns Points
 */
const setPoints = (
  lastPoint: { x: number; y: number } | null,
  width: number,
  height: number
) => {
  const points = []

  if (lastPoint) {
    points.push(lastPoint.x)
    points.push(lastPoint.y)
  }

  while (points.length < 4 * 2)
    points.push(
      50 + Math.random() * (height - 100),
      50 + Math.random() * (width - 100)
    )

  return points
}

/**
 * Get point
 * @param curve Curve
 * @param t t
 * @returns Point
 */
const getPoint = (curve: Bezier, t: number) => {
  return curve.compute(t)
}

/**
 * Get angle
 * @param curve Curve
 * @param t t
 * @returns Angle
 */
const getAngle = (curve: Bezier, t: number) => {
  const derivative = curve.derivative(t)
  const angle = Math.PI / 2 - Math.atan2(derivative.y, derivative.x)
  return angle
}

/**
 * Butterfly
 * @param props Props
 * @returns Butterfly
 */
const Butterfly = () => {
  // Ref
  const shape = useRef<HTMLButtonElement>(null)
  const lastPoint = useRef<{ x: number; y: number }>(null)
  const int = useRef<NodeJS.Timeout>(null)

  // State
  const [size, setSize] = useState<{ width: number; height: number }>()
  const [colors, setColors] = useState<Color>(colorsShapes[0])

  /**
   * Set move
   * @param button Button
   * @param move Move
   */
  const setMove = useCallback((button: HTMLButtonElement, move: boolean) => {
    const svg = button.children[0]
    const topWing = svg.children[0]
    const bottomWing = svg.children[1]

    if (move)
      [topWing, bottomWing].forEach((e) => {
        e.classList.remove('slow')
        e.classList.add('wing')
      })
    else
      [topWing, bottomWing].forEach((e) => {
        e.classList.remove('wing')
        e.classList.add('slow')
      })
  }, [])

  /**
   * Clear transform
   */
  const clearTransform = useCallback(() => {
    if (!int.current) return
    clearInterval(int.current)
    int.current = null
  }, [])

  /**
   * Handle resize
   */
  const handleResize = useCallback(() => {
    lastPoint.current = null
    clearTransform()
    setSize({
      width: global.window ? global.screen.width : 0,
      height: global.window ? global.screen.height : 0,
    })
  }, [clearTransform])

  /**
   * Set transform
   */
  const setTransform = useCallback(() => {
    if (int.current) return
    if (!size) return

    const button = shape.current
    if (!button) return

    // Bezier curve
    const points = setPoints(lastPoint.current, size.width, size.height)
    const curve = new Bezier(points)
    lastPoint.current = curve.compute(1)

    // Move
    let t = 0
    int.current = setInterval(() => {
      t += 1 / 1_000

      if (t > 1) {
        clearTransform()
        setMove(button, false)
        return
      }

      setMove(button, true)

      const point = getPoint(curve, t)
      button.style.top = point.x + 'px'
      button.style.left = point.y + 'px'

      const angle = getAngle(curve, t)
      button.style.rotate = `${angle}rad`
    }, 10)
  }, [size, setMove, clearTransform])

  // Transform
  useEffect(() => {
    if (!size) {
      clearTransform()
      return
    }

    setTransform()

    return () => {
      clearTransform()
    }
  }, [size, setTransform, clearTransform])

  // Colors
  useEffect(() => {
    const num = Math.floor(Math.random() * 3)
    setColors(colorsShapes[num])
  }, [])

  // Width
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  /**
   * Render
   */
  return (
    <button className={styles.shape} ref={shape} onClick={setTransform}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-2 -2 136 204'
        width='50'
      >
        <g id='wing_bottom'>
          {/* PATH */}
          <path
            d='M75.13 100s59.42 41.22 56.79 82.78c-.77 12.12-6.14 19.32-23.41 16.67C59.79 191.97 55.75 131.44 64 100h11.13Z'
            fill={colors.base}
            stroke={colors.border}
          />
          <path
            d='M68.22 100c1.15 19.13-4.22 72.17-29.35 70.47-23.04-1.56-40.43-16.38-38.76-28.04 2.69-18.75 39.33-41.3 47.58-42.43h20.53Z'
            fill={colors.base}
            stroke={colors.border}
          />
          {/* FRONT CIRCLES */}
          <circle cy='190' cx='100' r='3' fill={colors.dot1} />
          <circle cy='192' cx='115' r='3' fill={colors.dot1} />
          <circle cy='185' cx='125' r='3' fill={colors.dot1} />
          {/* BACK CIRCLES */}
          <circle cy='145' cx='5' r='3' fill={colors.dot2} />
          <circle cy='155' cx='12' r='3' fill={colors.dot2} />
          <circle cy='162' cx='25' r='3' fill={colors.dot2} />
          <circle cy='165' cx='40' r='3' fill={colors.dot2} />
          <circle cy='150' cx='23' r='3' fill={colors.dot2} />
          <circle cy='155' cx='35' r='3' fill={colors.dot2} />
          <circle cy='155' cx='50' r='3' fill={colors.dot2} />
        </g>
        <g id='wing_top'>
          {/* PATH */}
          <path
            d='M75.13 100s59.42-41.22 56.79-82.78C131.15 5.1 125.78-2.1 108.51.55 59.79 8.03 55.75 68.56 64 100h11.13Z'
            fill={colors.base}
            stroke={colors.border}
          />
          <path
            d='M68.22 100C69.37 80.87 64 27.83 38.87 29.53 15.83 31.09-1.56 45.91.11 57.57 2.8 76.32 39.44 98.87 47.69 100h20.53Z'
            fill={colors.base}
            stroke={colors.border}
          />
          {/* FRONT CIRCLES */}
          <circle cy='10' cx='100' r='3' fill={colors.dot1} />
          <circle cy='8' cx='115' r='3' fill={colors.dot1} />
          <circle cy='15' cx='125' r='3' fill={colors.dot1} />
          {/* BACK CIRLCES */}
          <circle cy='55' cx='5' r='3' fill={colors.dot2} />
          <circle cy='45' cx='12' r='3' fill={colors.dot2} />
          <circle cy='38' cx='25' r='3' fill={colors.dot2} />
          <circle cy='35' cx='40' r='3' fill={colors.dot2} />
          <circle cy='50' cx='23' r='3' fill={colors.dot2} />
          <circle cy='45' cx='35' r='3' fill={colors.dot2} />
          <circle cy='45' cx='50' r='3' fill={colors.dot2} />
        </g>
        <g id='body' className={styles.body}>
          {/* BODY */}
          <path
            d='M82.59 102.81a4.806 4.806 0 0 0 3.85 1.92c2.65 0 4.8-2.12 4.8-4.74s-2.15-4.74-4.8-4.74c-1.58 0-2.98.76-3.85 1.92-2.69-1.17-7.01-1.92-11.88-1.92-3.19 0-6.15.33-8.56.88-2.42-.55-5.37-.88-8.56-.88-4.22 0-8.03.57-10.72 1.48-2.69-.91-6.5-1.48-10.72-1.48-8.16 0-14.77 2.12-14.77 4.74s6.61 4.74 14.77 4.74c4.22 0 8.03-.57 10.72-1.48 2.69.91 6.5 1.48 10.72 1.48 3.19 0 6.15-.33 8.56-.88 2.42.55 5.37.88 8.56.88 4.87 0 9.19-.76 11.88-1.92Z'
            fill='#1e1f1d'
          />
          <path
            d='M89.97 101.73s0-.1.01-.15c.08-.51.56-.85 1.08-.77 12.36 1.97 28.14 10.97 33.05 23.76a.933.933 0 0 1-.55 1.2.94.94 0 0 1-1.21-.54c-4.66-12.14-19.75-20.7-31.59-22.59a.931.931 0 0 1-.79-.91Z'
            fill='#1e1f1d'
          />
          <path
            d='M89.97 98.27s0 .1.01.15c.08.51.56.85 1.08.77 12.36-1.97 28.14-10.97 33.05-23.76a.933.933 0 0 0-.55-1.2.94.94 0 0 0-1.21.54c-4.66 12.14-19.75 20.7-31.59 22.59-.46.07-.79.47-.79.91Z'
            fill='#1e1f1d'
          />
        </g>
      </svg>
    </button>
  )
}

export default Butterfly

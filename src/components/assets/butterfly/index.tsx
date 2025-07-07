'use client'

import { useEffect, useMemo, useRef } from 'react'
import styles from './index.module.css'

export interface Props {
  xSpeed?: number
  yAmplitude?: number
  xDelay?: number
  yDelay?: number
}

/**
 * Butterfly
 * @param props Props
 * @returns Butterfly
 */
const Butterfly: React.FC<Props> = ({
  xSpeed = 1 / 5,
  yAmplitude = 50,
  xDelay,
  yDelay,
}) => {
  // Ref
  const shape = useRef<HTMLDivElement>(null)
  const int = useRef<NodeJS.Timeout>(null)

  // Width
  const width = useMemo(() => {
    return global.window ? global.window.innerWidth : 0
  }, [])

  // Transform
  useEffect(() => {
    const div = shape.current
    if (!div) return

    let t = xDelay ? (xDelay / 100) * (width / xSpeed) : 0
    int.current = setInterval(() => {
      t += 10
      t = t % (width / xSpeed)
      const translateX = t * xSpeed

      const delayY = yDelay ? (yDelay / 100) * width : 0
      const translateY = yAmplitude * Math.sin((Math.PI * (t - delayY)) / width)
      div.style.translate = `${translateX}px ${translateY}px`

      const angle = Math.cos((Math.PI * (t - delayY)) / width)
      div.style.rotate = `${angle}rad`
    }, 10)

    return () => {
      if (int.current) clearInterval(int.current)
    }
  }, [xSpeed, yAmplitude, xDelay, yDelay, width])

  /**
   * Render
   */
  return (
    <div className={styles.shape} ref={shape}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-2 -2 136 204'
        width='50'
      >
        <g id='wing_bottom' className={styles.wing}>
          {/* PATH */}
          <path
            d='M75.13 100s59.42 41.22 56.79 82.78c-.77 12.12-6.14 19.32-23.41 16.67C59.79 191.97 55.75 131.44 64 100h11.13Z'
            fill='#cbbba0'
            stroke='#be1823'
          />
          <path
            d='M68.22 100c1.15 19.13-4.22 72.17-29.35 70.47-23.04-1.56-40.43-16.38-38.76-28.04 2.69-18.75 39.33-41.3 47.58-42.43h20.53Z'
            fill='#cbbba0'
            stroke='#be1823'
          />
          {/* BLUE CIRCLES */}
          <circle cy='190' cx='100' r='3' fill='#02a19a' />
          <circle cy='192' cx='115' r='3' fill='#02a19a' />
          <circle cy='185' cx='125' r='3' fill='#02a19a' />
          {/* ORANGE CIRCLES */}
          <circle cy='145' cx='5' r='3' fill='#e94f1d' />
          <circle cy='155' cx='12' r='3' fill='#e94f1d' />
          <circle cy='162' cx='25' r='3' fill='#e94f1d' />
          <circle cy='165' cx='40' r='3' fill='#e94f1d' />
          <circle cy='150' cx='23' r='3' fill='#e94f1d' />
          <circle cy='155' cx='35' r='3' fill='#e94f1d' />
          <circle cy='155' cx='50' r='3' fill='#e94f1d' />
        </g>
        <g id='wing_top' className={styles.wing}>
          {/* PATH */}
          <path
            d='M75.13 100s59.42-41.22 56.79-82.78C131.15 5.1 125.78-2.1 108.51.55 59.79 8.03 55.75 68.56 64 100h11.13Z'
            fill='#cbbba0'
            stroke='#be1823'
          />
          <path
            d='M68.22 100C69.37 80.87 64 27.83 38.87 29.53 15.83 31.09-1.56 45.91.11 57.57 2.8 76.32 39.44 98.87 47.69 100h20.53Z'
            fill='#cbbba0'
            stroke='#be1823'
          />
          {/* BLUE CIRCLES */}
          <circle cy='10' cx='100' r='3' fill='#02a19a' />
          <circle cy='8' cx='115' r='3' fill='#02a19a' />
          <circle cy='15' cx='125' r='3' fill='#02a19a' />
          {/* ORANGE CIRLCES */}
          <circle cy='55' cx='5' r='3' fill='#e94f1d' />
          <circle cy='45' cx='12' r='3' fill='#e94f1d' />
          <circle cy='38' cx='25' r='3' fill='#e94f1d' />
          <circle cy='35' cx='40' r='3' fill='#e94f1d' />
          <circle cy='50' cx='23' r='3' fill='#e94f1d' />
          <circle cy='45' cx='35' r='3' fill='#e94f1d' />
          <circle cy='45' cx='50' r='3' fill='#e94f1d' />
        </g>
        <g id='body' className={styles.body}>
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
    </div>
  )
}

export default Butterfly

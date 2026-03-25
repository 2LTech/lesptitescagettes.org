'use client'

import { SyntheticEvent, useCallback } from 'react'

export interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  style?: React.CSSProperties
}

// Not found image
const notFoundImage = 'img/misc/img-not-found.svg'

/**
 * Image
 * @param props Props
 * @returns Image
 */
const Image: React.FunctionComponent<Props> = (props) => {
  /**
   * On error
   * @param e Event
   */
  const onError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = notFoundImage
  }, [])

  /**
   * Return
   */
  return (
    <picture style={props.style}>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        onError={onError}
      />
    </picture>
  )
}

export default Image

'use client'

import { useCallback, useEffect, useState } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'
import Link from 'next/link'

export interface Formatted {
  day: number
  morning?: {
    open: { hour: string; minute: string }
    close: { hour: string; minute: string }
  }
  afternoon?: {
    open: { hour: string; minute: string }
    close: { hour: string; minute: string }
  }
}

// Google API key (secured)
const securedGoogleApiKey = 'AIzaSyCkG6N5VykY73pf711S8z3edVM0b06itoE'
// Place ID
const placeId = 'ChIJzfyuR8P_-EcRpyyKoKiMeLU'

// Days
const days = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche'
]

/**
 * Formatter
 * @param data Data
 * @returns Formatted data
 */
const formatter = (
  data?: google.maps.places.OpeningHoursPeriod[]
): React.ReactElement[] | undefined => {
  if (!data) return undefined
  const byDay: Formatted[] = new Array(7)

  data.forEach((d) => {
    const day = d.open.day - 1 < 0 ? 6 : d.open.day - 1
    const key = d.open.hour < 12 ? 'morning' : 'afternoon'
    byDay[day] = {
      ...(byDay[day] ?? {}),
      day,
      [key]: {
        open: {
          hour: d.open.hour.toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
            useGrouping: false
          }),
          minute: d.open.minute.toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })
        },
        close: {
          hour: d.close?.hour.toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
            useGrouping: false
          }),
          minute: d.close?.minute.toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })
        }
      }
    }
  })

  return byDay.map((d) => {
    const day = days[d.day]
    const morning = d.morning ? (
      <>
        {d.morning.open.hour}
        <sup>h</sup>
        {d.morning.open.minute} &#8212; {d.morning.close.hour}
        <sup>h</sup>
        {d.morning.close.minute}
      </>
    ) : null
    const afternoon = d.afternoon ? (
      <>
        {d.afternoon.open.hour}
        <sup>h</sup>
        {d.afternoon.open.minute} &#8212; {d.afternoon.close.hour}
        <sup>h</sup>
        {d.afternoon.close.minute}
      </>
    ) : null
    const sep = morning && afternoon ? <br /> : null
    return (
      <>
        <span>{day}</span>
        <span>
          {morning}
          {sep}
          {afternoon}
        </span>
      </>
    )
  })
}

/**
 * Google Maps data
 * @returns Data
 */
const GoogleMapData = () => {
  // Loader
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: securedGoogleApiKey
  })

  // State
  const [schedule, setSchedule] = useState<React.ReactElement[]>()

  /**
   * Get schedule
   */
  const getSchedule = useCallback(() => {
    ;(async () => {
      const { Place } = (await google.maps.importLibrary(
        'places'
      )) as google.maps.PlacesLibrary
      const place = new Place({
        id: placeId,
        requestedLanguage: 'fr'
      })
      await place.fetchFields({ fields: ['regularOpeningHours'] })
      const periods = place.regularOpeningHours?.periods
      setSchedule(formatter(periods))
    })()
  }, [])

  // Autorun
  useEffect(() => {
    if (!isLoaded) return

    getSchedule()
  }, [isLoaded, getSchedule])

  /**
   * Render
   */
  return schedule ? (
    <div className="table">{schedule}</div>
  ) : (
    <div className="table">
      <Link
        className="button"
        href="https://maps.app.goo.gl/4Gjr238iDqZXdecd9"
        target="_blank"
      >
        Voir sur Google Maps
      </Link>
    </div>
  )
}

export default GoogleMapData

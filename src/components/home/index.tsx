import Link from 'next/link'
import { Caveat } from 'next/font/google'

import Footer from '../assets/footer'
import Header from '../assets/header'

import styles from './index.module.css'

const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
})

const producers = []

const partners = []

/**
 * Home
 * @returns Home
 */
const Home = () => {
  return (
    <main className={styles.home}>
      <Header />

      <div className={styles.content}>
        <div className={styles.left}>
          <span>Ancienne épicerie</span>
          <span>Association de producteurs et de consommateurs</span>
          <div className='address'>
            <Link
              href='https://maps.app.goo.gl/4Gjr238iDqZXdecd9'
              target='_blank'
            >
              <div className='road'>5 place des farges</div>
              <div className='city'>Treignac</div>
            </Link>
            <Link href='tel:0601827105'>
              <div className='phone'>06 01 82 71 05</div>
            </Link>
          </div>
          <div className='schedules'>
            Horaires d&apos;été
            <div className='table'>
              <span>Mardi</span>
              <span>
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Mercredi</span>
              <span>
                10<sup>h</sup> &#8212; 12<sup>h</sup>30
                <br />
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Jeudi</span>
              <span>
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Vendredi</span>
              <span>
                10<sup>h</sup> &#8212; 12<sup>h</sup>30
                <br />
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Samedi</span>
              <span>
                9<sup>h</sup> &#8212; 12<sup>h</sup>30
                <br />
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Dimanche</span>
              <span>
                9<sup>h</sup> &#8212; 12<sup>h</sup>30
              </span>
            </div>
          </div>
        </div>
        <img src='/img/home/bicycle.svg' alt='img' />
        <div className={styles.right}>
          <span>Pain</span>
          <span>Légumes</span>
          <span>Fruits</span>
          <span>Épicerie</span>
          <span>Oeufs</span>
          <span>Fromages</span>
          <span className='red'>Viande</span>
          <span className='red'>Miel</span>
          <span className='red'>Sorbet</span>
          <span className='red'>Poisson</span>
          <span className='red'>Jus & confitures</span>
          <span className='red'>etc.</span>
        </div>
      </div>

      {producers.length ? (
        <div className={styles.producers}>
          <h1 className={caveat.className}>Producteurs</h1>
        </div>
      ) : null}

      {partners.length ? (
        <div className={styles.partners}>
          <h1 className={caveat.className}>Partenaires</h1>
        </div>
      ) : null}

      <Footer />
    </main>
  )
}

export default Home

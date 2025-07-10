import Link from 'next/link'
import { Caveat } from 'next/font/google'

import Footer from '../assets/footer'
import Header from '../assets/header'
import Butterfly from '../assets/butterfly'
import GoogleMapData from '../assets/googleMaps'

import styles from './index.module.css'

const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
})

const butterfies = Array.from(Array(3), (_, index) => index + 1)

const producers = [
  {
    img: 'img',
    name: 'Producteur 1',
    description:
      'Description ... blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla',
  },
  {
    img: 'img',
    name: 'Producteur 2',
    description:
      'Description ... blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla',
  },
  {
    img: 'img',
    name: 'Producteur 3',
    description:
      'Description ... blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla',
  },
  {
    img: 'img',
    name: 'Producteur 4',
    description:
      'Description ... blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla',
  },
]

/**
 * Home
 * @returns Home
 */
const Home = () => {
  return (
    <main className={styles.home}>
      <Header />
      {butterfies.map((b) => (
        <Butterfly key={b} />
      ))}

      <div className={styles.content}>
        <div className={styles.left}>
          <div className='address'>
            <Link
              href='https://maps.app.goo.gl/4Gjr238iDqZXdecd9'
              target='_blank'
            >
              <div className='road'>5 place des farges</div>
              <div className='city'>Treignac</div>
            </Link>
            <Link href='tel:+33780248944' target='_blank'>
              <div className='phone'>07 80 24 89 44</div>
            </Link>
          </div>
          <div className='schedules'>
            Horaires
            <GoogleMapData />
          </div>
        </div>
        <img src='img/home/bicycle.svg' alt='img' />
        <div className={styles.right}>
          <span>Pain</span>
          <span>Légumes</span>
          <span>Fruits</span>
          <span>Épicerie</span>
          <span>Œufs</span>
          <span>Fromages</span>
          <span>Viandes</span>
          <span>Miel</span>
          <span>Sorbets</span>
          <span>Poissons</span>
          <span>Jus & confitures</span>
          <span>Conserves</span>
          <span>Pâtés</span>
          <span>Terrines</span>
          <span>Saucissons</span>
          <span>etc.</span>
        </div>
      </div>

      <div className={styles.text}>
        Text etc. bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla
      </div>

      {producers.length ? (
        <div className={styles.producers}>
          <h1 className={caveat.className}>Producteurs</h1>
          <div className={styles.producersList}>
            {producers.map((p) => (
              <div key={p.name} className={styles.producer}>
                <h3>{p.name}</h3>
                <hr />
                <div className={styles.producerContent}>
                  <img src={p.img} alt={p.name} />
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  )
}

export default Home

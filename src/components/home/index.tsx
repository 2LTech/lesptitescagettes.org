import Link from 'next/link'
import { Caveat } from 'next/font/google'

import Footer from '../assets/footer'
import Header from '../assets/header'
import Butterfly from '../assets/butterfly'

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
            <Link href='tel:0601827105' target='_blank'>
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
                09<sup>h</sup> &#8212; 12<sup>h</sup>30
                <br />
                16<sup>h</sup> &#8212; 19<sup>h</sup>
              </span>
              <span>Dimanche</span>
              <span>
                09<sup>h</sup> &#8212; 12<sup>h</sup>30
              </span>
            </div>
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

      {producers.length ? (
        <div className={styles.producers}>
          <h1 className={caveat.className}>Producteurs</h1>
          <div className={styles.producersList}>
            {producers.map((p) => (
              <div key={p.name} className={styles.producer}>
                <h3>{p.name}</h3>
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

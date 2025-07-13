import { Caveat } from 'next/font/google'

import styles from './index.module.css'
import Image from '../image'

const caveat = Caveat({
  weight: '400',
  subsets: ['latin']
})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftImages}>
        <Image
          src="img/header/left_flower.svg"
          alt="img"
          style={{ alignSelf: 'flex-end' }}
        />
        <Image
          src="img/header/left_butterfly.svg"
          alt="img"
          style={{ margin: 'auto' }}
        />
      </div>
      <div className={styles.title}>
        <h2>Produits locaux & Épicerie bio</h2>
        <h1 className={caveat.className}>Les P&apos;tites Cagettes</h1>
        <h3>
          <strong>Association</strong> de <strong>producteurs</strong> et de{' '}
          <strong>consommateurs</strong>
        </h3>
      </div>
      <div className={styles.rightImages}>
        <Image
          src="img/header/right_butterfly_1.svg"
          alt="img"
          style={{
            margin: 'auto'
          }}
        />
        <Image
          src="img/header/right_butterfly_2.svg"
          alt="img"
          style={{
            margin: 'auto auto 5% auto'
          }}
        />
        <Image
          src="img/header/right_grass.svg"
          alt="img"
          style={{ alignSelf: 'flex-end', margin: '10px' }}
        />
      </div>
    </header>
  )
}

export default Header

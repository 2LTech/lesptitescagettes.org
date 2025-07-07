import { Caveat } from 'next/font/google'

import styles from './index.module.css'

const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftImages}>
        <img
          src='img/header/left_flower.svg'
          alt='img'
          style={{ alignSelf: 'flex-end' }}
        />
        <img
          src='img/header/left_butterfly.svg'
          alt='img'
          style={{ margin: 'auto' }}
        />
      </div>
      <div className={styles.title}>
        <h2>Produits Locaux & Épicerie Bio</h2>
        <h1 className={caveat.className}>Les p&apos;tites cagettes</h1>
        <h3>
          <strong>Association</strong> de <strong>producteurs</strong> et de{' '}
          <strong>consommateurs</strong>
        </h3>
      </div>
      <div className={styles.rightImages}>
        <img
          src='img/header/right_butterfly_1.svg'
          alt='img'
          style={{
            margin: 'auto',
          }}
        />
        <img
          src='img/header/right_butterfly_2.svg'
          alt='img'
          style={{
            margin: 'auto auto 5% auto',
          }}
        />
        <img
          src='img/header/right_grass.svg'
          alt='img'
          style={{ alignSelf: 'flex-end', margin: '10px' }}
        />
      </div>
    </header>
  )
}

export default Header

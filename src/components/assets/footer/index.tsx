import Link from 'next/link'
import styles from './index.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()}&copy;Tous droits réservés.
      <div>
        Conçu avec{' '}
        <Image
          src='/img/footer/heart.svg'
          alt='amour'
          className={styles.heart}
          width={14}
          height={14}
        />{' '}
        par <Link href='https://2ltech.fr/'>2LTech</Link>
      </div>
    </footer>
  )
}

export default Footer

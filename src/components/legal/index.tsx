import Link from 'next/link'
import Footer from '../assets/footer'
import Header from '../assets/header'

import styles from './index.module.css'

const Legal = () => {
  return (
    <main className={styles.legal}>
      <Header />

      <div className={styles.content}>
        <Link href="/" className={styles.button}>
          Accueil
        </Link>
        <h1>1 - Édition du site</h1>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, il est précisé aux
          utilisateurs du site internet https://lesptitescagettes.org/
          l&apos;identité des différents intervenants dans le cadre de sa
          réalisation et de son suivi:
        </p>
        <p>Propriétaire du site : Association LES P&apos;TITES CAGETTES</p>
        <ul>
          <li>Contact : contact@lesptitescagettes.org 07 80 24 89 44</li>
          <li>Adresse : 5 PLACE DES FARGES 19260 TREIGNAC</li>
        </ul>
        <p>
          Identification de l&apos;entreprise : Association déclarée LES
          P&apos;TITES CAGETTES
        </p>
        <ul>
          <li>SIREN : 924748445</li>
          <li>Adresse postale : 5 PLACE DES FARGES 19260 TREIGNAC</li>
        </ul>
        <p>Directeur de la publication : 2LTech</p>
        <ul>
          <li>Contact : contact@2ltech.fr</li>
          <li>
            Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix
            Cedex 1 - Téléphone : 1007
          </li>
        </ul>
        <h1>2 - Propriété intellectuelle et contrefaçons.</h1>
        <p>
          Association LES P&apos;TITES CAGETTES est propriétaire des droits de
          propriété intellectuelle et détient les droits d’usage sur tous les
          éléments accessibles sur le site internet, notamment les textes,
          images, graphismes, logos, vidéos, architecture, icônes et sons.
          <br />
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de Association LES P&apos;TITES CAGETTES.
          <br />
          Toute exploitation non autorisée du site ou de l’un quelconque des
          éléments qu’il contient sera considérée comme constitutive d’une
          contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
        <h1>3 - Limitations de responsabilité.</h1>
        <p>
          Association LES P&apos;TITES CAGETTES ne pourra être tenu pour
          responsable des dommages directs et indirects causés au matériel de
          l’utilisateur, lors de l’accès au site https://lesptitescagettes.org/.
          <br />
          Association LES P&apos;TITES CAGETTES décline toute responsabilité
          quant à l’utilisation qui pourrait être faite des informations et
          contenus présents sur https://lesptitescagettes.org/.
          <br />
          Association LES P&apos;TITES CAGETTES s’engage à sécuriser au mieux le
          site http://lesptitescagettes.org/, cependant sa responsabilité ne
          pourra être mise en cause si des données indésirables sont importées
          et installées sur son site à son insu. Des espaces interactifs (espace
          contact ou commentaires) sont à la disposition des utilisateurs.
          <br />
          Association LES P&apos;TITES CAGETTES se réserve le droit de
          supprimer, sans mise en demeure préalable, tout contenu déposé dans
          cet espace qui contreviendrait à la législation applicable en France,
          en particulier aux dispositions relatives à la protection des données.
          <br />
          Le cas échéant, Association LES P&apos;TITES CAGETTES se réserve
          également la possibilité de mettre en cause la responsabilité civile
          et/ou pénale de l’utilisateur, notamment en cas de message à caractère
          raciste, injurieux, diffamant, ou pornographique, quel que soit le
          support utilisé (texte, photographie …).
        </p>
        <h1>4 - CNIL et gestion des données personnelles.</h1>
        <p>
          Le site https://lesptitescagettes.org/ ne collecte pas de données
          personnelles.
        </p>
        <h1>5 - Liens hypertextes et cookies</h1>
        <p>
          Le site https://lesptitescagettes.org/ contient des liens hypertextes
          vers d’autres sites et dégage toute responsabilité à propos de ces
          liens externes ou des liens créés par d’autres sites vers
          https://lesptitescagettes.org/.
          <br />
          La navigation sur le site https://lesptitescagettes.org/ est
          susceptible de provoquer l’installation de cookie(s) sur l’ordinateur
          de l’utilisateur. Un &quot;cookie&quot; est un fichier de petite
          taille qui enregistre des informations relatives à la navigation d’un
          utilisateur sur un site. Les données ainsi obtenues permettent
          d&apos;obtenir des mesures de fréquentation, par exemple.
          <br />
          Vous avez la possibilité d’accepter ou de refuser les cookies en
          modifiant les paramètres de votre navigateur.
          <br />
          Aucun cookie ne sera déposé sans votre consentement. Les cookies sont
          enregistrés pour une durée maximale de mois.
        </p>
        <h1>6 - Droit applicable et attribution de juridiction.</h1>
        <p>
          Tout litige en relation avec l’utilisation du site
          https://lesptitescagettes.org/ est soumis au droit français. En dehors
          des cas où la loi ne le permet pas, il est fait attribution exclusive
          de juridiction aux tribunaux compétents de Tulle.
        </p>
      </div>

      <Footer />
    </main>
  )
}

export default Legal

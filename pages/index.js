import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footbar from '../components/Footbar'
import About from '../components/About'
import Prices from '../components/Prices'
import Gallery from '../components/Gallery'
import Main from "../components/Home"
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petra Fitness Gym-Workout, Boxing and Cardio</title>
        <meta name="description" content="Petra Fitness Gym is a fitness center located in Saranda, in the southern part of Albania. Being opened in 2022, the gym features the latest machines and gym equippment, including a boxing area and an overall amazing seaside view. Besides the main workout area, the center also offers a specific zone to train abs and core. Having covered weights up to 500kg, the gym satisfies the needs and wants of many costumers, the majority of wich end up becoming regular clients. The restrooms are equipped with showers.Cleanliness is one of the main concerns of the staff, which make sure to guarantee a perfectly sanitized and clean environment.
" />
        <link rel="icon" href="/logo.jpg" />

      </Head>


      <main className={styles.main}>
        <Navbar />
        <section className='home' id="home">
          <Main />
        </section>
        <section className='about' id="about">
          <About />
        </section>
        <section className='pricing'>
          <Prices />
        </section>
        <section className='gallery' id="gallery">
          <Gallery />
        </section>


      </main>

      <footer className={styles.footer} id="contacts">
        <Footbar />
      </footer>
    </div>
  )
}

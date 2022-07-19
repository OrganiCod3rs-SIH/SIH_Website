import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AYJNISHD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Cochlear Implant under ADIP Scheme of Government of India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/>
          Ali Yavar Jung National Institute of Speech <br/>and<br/>Hearing Disabilities(Divyangjan),Mumbai!<a href="http://adipcochlearimplant.in/"><br/>(AYNISHD)</a>
        </h1>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        > <b>Created By OrganiCod3rs</b>
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}

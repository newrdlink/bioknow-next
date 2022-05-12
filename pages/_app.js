import '../styles/globals.css'
import styles from '../styles/variables.module.scss'
import { Header, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  // console.log(styles)
  return (
    <div className='root'
    // initinal variables in scss
    // style={{ backgroundColor: styles.primary }}
    >
      <Header />
      <Component {...pageProps} {...styles.primary} />
      <Footer />
    </div>
  )
}

export default MyApp

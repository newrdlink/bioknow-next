import '../styles/globals.css'
import styles from '../styles/variables.module.scss'
import { Header, Footer, CircleIndicator } from 'components'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  // console.log(styles)
  return (
    <div className='root'
    // initinal variables in scss
    // style={{ backgroundColor: styles.primary }}
    >
      <Script src="/index.js" type='text/javascript' />
      <CircleIndicator />
      <Header />
      <Component {...pageProps} {...styles.primary} />
      <Footer />
    </div>
  )
}

export default MyApp

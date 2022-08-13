import '../styles/globals.css'
import styles from '../styles/variables.module.scss'
import { Header, Footer, CircleIndicator, MobMenu } from 'components'
import { WidthScreen } from 'utils/widthScreen'
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
      {WidthScreen().width < 500 && <MobMenu />}
      <Header />
      <Component {...pageProps} {...styles.primary} />
      <Footer />
    </div>
  )
}

export default MyApp

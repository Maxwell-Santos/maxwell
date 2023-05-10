import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/scrollbar.css"
import "../styles/nprogress.css"
import "../styles/swiper.css"
import "../styles/drawer.css"
import { Analytics } from "@vercel/analytics/react"
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

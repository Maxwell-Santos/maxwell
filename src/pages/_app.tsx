import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/scrollbar.css"
import "../styles/swiper.css"
import "../styles/drawer.css"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

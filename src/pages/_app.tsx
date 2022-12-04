import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/scrollbar.css';
import '../styles/swiper.css';
import '../styles/drawer.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

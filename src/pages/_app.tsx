import type { AppProps } from 'next/app';
import '../styles/b.css';
import '../styles/globals.css';
import '../styles/scrollbar.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Skills } from '../components/Skills/'
import { Contact } from '../components/Contact'
import Head from '../components/Head'

export default function Home() {
  return (
    <>
    <Head />
      <Header />
      <main
        className='md:mt-24'
      >
        <Intro />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
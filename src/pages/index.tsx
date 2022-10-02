import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import Head from '../components/Head'
import { Header } from '../components/Header'
import { Intro } from '../components/Intro'
import { Skills } from '../components/Skills/'

  
export default function Home() {
  return (
    <div className='overflow-hidden'>
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
    </div>
  )
}
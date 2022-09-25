import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Skills } from '../components/Skills/'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main
      className='mt-24'
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
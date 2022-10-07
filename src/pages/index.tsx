import { About } from '../components/About'
import { ActionButton } from '../components/ActionButton'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Headers'
import { Intro } from '../components/Intro'
import { Skills } from '../components/Skills/'

  
export default function Home() {
  return (
    <div className='overflow-hidden'>
    <Head />
      <Header />
      <main
        className='md:mt-28'
      >
        <Intro />
        <About />
        <Skills />
        <Contact />
        {/* <ActionButton/> */}
      </main>
      <Footer />
    </div>
  )
}
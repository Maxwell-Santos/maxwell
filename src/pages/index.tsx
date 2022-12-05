import Head from '../components/Head'

import { Header } from '../components/Headers'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Skills } from '../components/Skills/'
import { Footer } from '../components/Footer'

  
export default function Home() {  
  return (
    <div className='overflow-hidden'>
    
    <Head>Maxwell Alves dos Santos</Head>

      <Header />
      <main
        className='mt-20 md:mt-28'
      >
        <Intro />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
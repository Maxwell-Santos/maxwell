import Head from '../components/Head'

import { Header } from '../components/Headers'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Skills } from '../components/Skills/'
import { useEffect, useState } from 'react'

  
export default function Home() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(screen.width)
    })
    setWidth(screen.width)
  }, [])

  
  return (
    <div className='overflow-hidden'>
    <Head />
      <Header />
      <main
        className='mt-20 md:mt-28'
      >
        <Intro />
        <About />
        <Skills />
    
        <Contact />
      </main>
    </div>
  )
}
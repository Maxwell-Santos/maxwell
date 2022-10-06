import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/future/image';
import { useEffect, useRef } from 'react';
import Circle1 from '../../public/circle1.svg';
import { Roadmap } from "./Roadmap";
import { TitleSection } from "./TitleSection";

export function About() {
  useEffect(() => { AOS.init() }, [])

  const about = useRef()

  return (
    <section>
      <Image
        src={Circle1}
        alt="circle1"
        className='absolute right-0 -top-9 -z-50'
      />
      
      <TitleSection title='Sobre' />

      <div className="flex flex-col sm:flex-row justify-center items-start gap-9">

        <div className="flex-1" data-aos="fade-right">
          <Roadmap />
        </div>
        
        <div className="flex-1" data-aos="fade-left">

          <div className="mb-7">
            <h3>Introdução</h3>
            <p>
              Formado como técnico em Desenvolvimento de Sistemas, meu foco é me especializar no Frontend. A facilidade de me comunicar sempre me proporcionou boas experiências com trabalhos em grupo, e saber trabalhar em grupo é essencial, me sinto seguro em dizer que farei um ótimo trabalho.
            </p>
            <br />
            <p>
              Quero trabalhar resolvendo problemas usando a tecnologia e fazer diferença na forma as pessoas se relacionam com a internet.
            </p>
          </div>

          <div className="mb-7">
            <h3>Objetivos</h3>
            <p>
              Busco oportunidades de crescimento pessoal e profissional, sempre disposto a aprender e mostrar resultados.
            </p>
          </div>

          <div className="mb-7">
            <h3>Paixões</h3>
            <p>
              Gosto de desenhar, música, arte num geral.
              Programar, resolver problemas, tudo isso também é muito importante para mim. Por isso escolhi o desenvolvimento de software, e aprender uma base do UI/UX. É muito interessante como as cores, formas geométricas, posicionamento, tem o poder de influenciar as escolha de uma pessoa que está mexendo no meu site, isso é incrível!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

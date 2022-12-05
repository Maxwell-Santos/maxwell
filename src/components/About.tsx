import { useMemo } from "react";
import { TitleSection } from "./TitleSection";
import { Roadmap } from "./Roadmap";

import { FadeCircle } from "./Circles";

import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const rightVariant = {
  visible: {
    opacity:1, 
    scale: 1,
    x:0, 
    transition: { duration: 0.5 }
  },
  
  hidden: {
    opacity:0, 
    scale: .9,
    x:200
  }
}

export function About() {
  const controlAbout = useAnimation()
  const [refAbout, inViewAbout] = useInView()

  useMemo(() => {
    if(inViewAbout) {
      controlAbout.start("visible")
    } else {
      controlAbout.start("hidden")
    }
  },[controlAbout, inViewAbout])

  return (
    <section className="about">
      <FadeCircle />

      <TitleSection title="Sobre" />

      <div
      className="flex flex-col-reverse justify-center items-start gap-9 sm:flex-row"
      >

        <div
        className="flex-1"            
        >
          <Roadmap />
        </div>

        <motion.div 
        className="flex-1"
        ref={refAbout}
        variants={rightVariant}
        initial="hidden"
        animate={controlAbout}     
        >

          <div className="mb-7">
            <h3>Introdução</h3>
            <p>
              Formado como técnico em <strong>Desenvolvimento de Sistemas</strong>, meu foco é me especializar no Frontend.
            </p>
            <br />
            <p>A facilidade de me comunicar sempre me proporcionou boas experiências com trabalhos em grupo. Saber trabalhar em grupo é essencial, me sinto seguro em dizer que farei um ótimo trabalho.</p>
            <br />
            <p >
              Quero trabalhar resolvendo problemas usando a tecnologia e fazer diferença na forma as pessoas se relacionam com a internet.
            </p>
          </div>

          <div className="mb-7" >
            <h3>Objetivos</h3>
            <p>
              Meu objetivo atualmente é atuar no Frontend.
            </p>
            <br />
            <p>As tecnologias que estudo e crio projetos atualmente são: o Nextjs, React, Tailwind, Material UI, Headless UI, Styled-Components entre outras tecnologias, como para envio de emails, versionamento de código, componentes de layout etc. Tudo afim de ajudar o usuário da melhor forma e a ter a melhor experiência.</p>

            <br />
            <p>Busco oportunidades de crescimento pessoal e profissional, estou sempre estudando, todo dia aprendendo ou fixando algo novo e ansioso para colocar em prática, agregar meus conhecimentos e o pela tecnologia.
            </p>
          </div>

          <div className="mb-7" >
            <h3>Paixões</h3>
            <p>
              Sou apaixonado por programar, gosto de desenhar, música, as vezes frequentar museus...
              Por isso, escolhi o desenvolvimento de software, e desenvolver habilidades no UI/UX.
            </p>
            <br />
            <p>
              É muito interessante como as cores, formas geométricas e posicionamento de elementos na tela, conseguem fazer o usuário tomar decisões diferentes e inconscientemente.
              E isso é legal, interessante!
            </p>
            <br />
            <p>
              Desenvolver software foi a forma que encontrei para mostrar a minha arte, e ter o potencial para mudar a vida das pessoas com a tecnologia.
              Apesar da arte geralmente ser aberta a interpretações, diferente do desenvolvimento do software, que tudo ali foi programado para funcionar daquela forma consistentemente, sem mais nem menos, apesar dessa diferença entre os dois, eu ainda vejo ambos como forma de quem criou se expressar.
            </p>
            <br />
            <p>
            Fazer algo que você gosta no trabalho, e o mesmo que estar sempre de férias. Apesar do estresse, de quando algo não funciona do jeito que deveria, programar é terapêutico para mim. 
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

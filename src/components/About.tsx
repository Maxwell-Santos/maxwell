import { useEffect } from "react";
import { TitleSection } from "./TitleSection";
import { Roadmap } from "./Roadmap";
import AOS from "aos";

import { FadeCircle } from "./Circles";

export function About() {
  useEffect(() => {
    AOS.init(
      {
        duration: 900,
      }
    )
  }, [])

  return (
    <section
      className="about"
    >
      <FadeCircle />

      <TitleSection title="Sobre" />


      <div className="flex flex-col-reverse justify-center items-start gap-9 sm:flex-row">

        <div className="flex-1" data-aos="fade-right">
          <Roadmap />
        </div>

        <div className="flex-1" data-aos="fade-left">

          <div className="mb-7">
            <h3 >Introdução</h3>
            <p >
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
            <p>As tecnologias que estudo e crio projetos atualmente é o Nextjs, React, Tailwind, Material UI, Headless UI, Styled-Components entre outras tecnologia, como para envio de emails, versionamento de código, componentes etc. Tudo afim de ajudar o usuário da melhor forma e a ter a melhor experiência.</p>

            <br />
            <p>Busco oportunidades de crescimento pessoal e profissional, sempre estudando e disposto a dar resultados, agregar meus conhecimentos e todo esse gosto pela tecnologia.
            </p>
          </div>

          <div className="mb-7" >
            <h3 >Paixões</h3>
            <p>
              Sou apaixonado em programar, gosto de desenhar, música, frequentar museus...
              Por isso, escolhi o desenvolvimento de software, e desenvolver habilidades no UI/UX.
            </p>
            <br />
            <p>
              É muito interessante como as cores, formas geométricas e posicionamento, tem o poder de influenciar as escolhas de quem está interagindo no meu site.
              Eu acho tudo isso é incrível!
            </p>
            <br />
            <p>
              Essa é a forma que encontrei de mostrar minha arte, e ter o potencial para mudar a vida das pessoas com a arte da tecnologia.
              Porém existe diferença, a arte é geralmente aberta para várias interpretações, diferente do desenvolvimento de software, onde tudo que tem ali na tela não é aberto a interpretação. Se for, <strong>está errado</strong>. Porque o software tem que ser funcional e clara suas funcionalidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

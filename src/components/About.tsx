import { useEffect } from "react";
import { TitleSection } from "./TitleSection";
import { Roadmap } from "./Roadmap";
import AOS from "aos";

import { FadeCircle } from "./Circles";

export function About() {
  useEffect(() => { AOS.init() }, [])

  return (
    <section
    className="about"
    >
    <FadeCircle/>

      <TitleSection title="Sobre" />
      

      <div className="flex flex-col justify-center items-start gap-9 sm:flex-row">

        <div className="flex-1" data-aos="fade-right">
          <Roadmap />
        </div>
        
        <div className="flex-1" data-aos="fade-left">

          <div className="mb-7">
            <h3 translate="yes">Introdução</h3>
            <p translate="yes">
              Formado como técnico em Desenvolvimento de Sistemas, meu foco é me especializar no Frontend. A facilidade de me comunicar sempre me proporcionou boas experiências com trabalhos em grupo. Saber trabalhar em grupo é essencial, me sinto seguro em dizer que farei um ótimo trabalho.
            </p>
            <br />
            <p translate="yes">
              Quero trabalhar resolvendo problemas usando a tecnologia e fazer diferença na forma as pessoas se relacionam com a internet.
            </p>
          </div>

          <div className="mb-7" translate="yes">
            <h3>Objetivos</h3>
            <p>
              Busco oportunidades de crescimento pessoal e profissional, sempre disposto a aprender e mostrar resultados.
            </p>
          </div>

          <div className="mb-7" translate="yes">
            <h3 translate="yes">Paixões</h3>
            <p translate="yes">
              Gosto de desenhar, música, arte num geral.
              Programar, resolver problemas, tudo isso também é muito importante para mim. Por isso, escolhi o desenvolvimento de software, e desenvolver habilidades no UI/UX. É muito interessante como as cores, formas geométricas, posicionamento, tem o poder de influenciar as escolhas de quem está interagindo no meu site, isso é incrível!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

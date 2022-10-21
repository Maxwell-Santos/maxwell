import { useEffect } from "react";
import Aos from "aos";

import { TitleSection } from "./../TitleSection";
import { TechnologiesCard } from "./Technologies";

import logo from '../../importAssets/importsLogos';
import { FadeCircle } from "../Circles";

const technologies = [
  { name: "React",             img: logo.react, },
  { name: "Typescript",        img: logo.ts, },
  { name: "Javascript",        img: logo.js, },
  { name: "HTML",              img: logo.html, },
  { name: "CSS",               img: logo.css, },
  { name: "Tailwind",          img: logo.tailwind, },
  { name: "GIT",               img: logo.git, },
  { name: "Next.JS",           img: logo.next, },
  { name: "Styled-Components", img: logo.styled_components, },
]

export function Skills() {
  useEffect(() => { Aos.init() }, [])

  return (
    <section
      className="px-0"
    >

      <FadeCircle/>
      
      <TitleSection title="Skills" />

      <div
        data-aos="zoom-out"
        className="bg-[#FFFFFF1A] p-6 my-5
        grid grid-cols-2 grid-rows-auto gap-4 place-items-center
        sm:grid-cols-3 sm:grid-rows-3 
        md:p-16"
      >
        {
        technologies.map(({ name, img }) => {
          return (
            <TechnologiesCard key={name} name={name} img={img} />
          )
        })
        }
      </div>
    </section>
  )
}

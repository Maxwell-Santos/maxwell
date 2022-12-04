import { useEffect } from "react";

import { TitleSection } from "./../TitleSection";
import { TechnologiesCard } from "./Technologie";

import logo from '../../importAssets/importsLogos';
import { FadeCircle } from "../Circles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies = [
  { name: "React", img: logo.react, },
  { name: "Typescript", img: logo.ts, },
  { name: "Javascript", img: logo.js, },
  { name: "HTML", img: logo.html, },
  { name: "CSS", img: logo.css, },
  { name: "Tailwind", img: logo.tailwind, },
  { name: "GIT", img: logo.git, },
  { name: "Next.JS", img: logo.next, },
  { name: "Styled-Components", img: logo.styled_components, },
]

const techVariant = {
  visible: {opacity:1, y:0, transition: { duration: 0.5 }},
  hidden: {opacity:0, y:200}
}
export function Skills() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if(inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  },[control, inView])
  
  return (
    <section
      className="px-0"
    >
      <FadeCircle />

      <TitleSection title="Skills" />
      
      <motion.div
        className="bg-[#ffffff0a] p-6 my-5
        grid grid-cols-2 grid-rows-auto gap-4 place-items-center
        sm:grid-cols-3 sm:grid-rows-3 
        md:p-16 relative"

        ref={ref}
        variants={techVariant}
        initial="hidden"
        animate={control} 

      >
        {
          technologies.map(({ name, img }) => {
            return (
              <TechnologiesCard key={name} name={name} img={img} />
            )
          })
        }

      </motion.div>
    </section>
  )
}

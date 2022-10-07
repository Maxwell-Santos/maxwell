import { useEffect } from "react";
import Aos from "aos";

import { TitleSection } from "./../TitleSection";
import { Technologies } from "./Technologies";
import Circle2 from '../../../public/circle2.svg';
import Image from "next/future/image";

import logo from './importsLogos';

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

      <Image
        src={Circle2}
        alt="circle 2"
        width={800}
        className="absolute -top-72 left-0 -z-50"
      />

      <TitleSection title="Skills" />

      <div
        data-aos="zoom-out"
        className="bg-[#FFFFFF1A] p-6 my-5
        grid grid-cols-2 grid-rows-auto gap-4 
        sm:grid-cols-3 sm:grid-rows-3 
        md:p-16"
      >
        {
        technologies.map(({ name, img }) => {
          return (
            <Technologies key={name} name={name} img={img} />
          )
        })
        }
      </div>
    </section>
  )
}

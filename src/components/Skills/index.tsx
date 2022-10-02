import Aos from "aos";
import Image from "next/future/image";
import { useEffect } from "react";

import Circle2 from '../../../public/circle2.svg';
import css from '../../../public/skillsIcons/css.svg';
import git from '../../../public/skillsIcons/git.svg';
import html from '../../../public/skillsIcons/html.svg';
import js from '../../../public/skillsIcons/js.svg';
import next from '../../../public/skillsIcons/next.svg';
import react from '../../../public/skillsIcons/react.svg';
import styled_components from '../../../public/skillsIcons/styled.svg';
import tailwind from '../../../public/skillsIcons/tailwind.svg';
import ts from '../../../public/skillsIcons/ts.svg';

import { TitleSection } from "./../TitleSection";
import { Technologies } from "./Technologies";

const technologies = [
  { name: "React", img: react, },
  { name: "Typescript", img: ts, },
  { name: "Javascript", img: js, },
  { name: "HTML", img: html, },
  { name: "CSS", img: css, },
  { name: "Tailwind", img: tailwind, },
  { name: "GIT", img: git, },
  { name: "Next.JS", img: next, },
  { name: "Styled-Components", img: styled_components, },
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
        className="grid grid-cols-2 grid-rows-auto sm:grid-cols-3 sm:grid-rows-3 gap-4 bg-[#FFFFFF1A] p-6 md:p-16 my-5"
        data-aos="zoom-out"
      >
        {technologies.map(({name, img}) => {
          return (
            <Technologies key={name} name={name} img={img}/>
          )
        })

        }
      </div>
    </section>
  )
}

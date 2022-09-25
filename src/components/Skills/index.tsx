import Image from "next/future/image";
import Circle2 from '../../../public/circle2.svg';

import { TitleSection } from "./../TitleSection";
import { Technologies } from "./Technologies";

const technologies = [
  "NextJS",
  "React",
  "Typescript",
  "Javascript",
  "CSS",
  "HTML",
  "Tailwind",
  "Styled-Components",
  "GIT"
]

export function Skills() {

  return (
    <section
    className="px-0"
    >
      
      <Image
      src={Circle2}
      alt="circle 2"
      width={800}
      className="absolute -top-72 left-0"
      />

      <div className="pr-16">
        <TitleSection title="Skills" />
      </div>

      <div
        className="grid grid-cols-2 grid-rows-auto sm:grid-cols-3 sm:grid-rows-3 gap-4 bg-[#FFFFFF1A] p-12 md:p-16 my-5"
      >
      {technologies.map(tech => {
        return(
          <Technologies key={tech} name={tech}/>
        )
      })

      }
      </div>
    </section>
  )
}

import { motion, useAnimation } from 'framer-motion'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { StackProps } from '../interfaces/StackProps'

const ulVariant = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: .5 }
  },
  
  hidden: {
    opacity: 0,
    scale: .9,
    x: -200,
  }
}

function Stack({ date, place, title, primary, id, soon }: StackProps) {
  return (
    <a
      href={`${primary ? '#' : `https://www.dio.me/certificate/${id}/`}`}
      target={'_blank'} rel="noreferrer"
      className={`
      ${primary && 'pointer-events-none'}
      ${soon && 'pointer-events-none'}
      flex-1 w-full`}
    >
      <li
        className={`px-2 py-3 mb-2 max-h-max 
          rounded-lg rounded-tl-none rounded-bl-none 
          border-l-4 border-secondary 
          md:px-4 md:py-6 transition-all duration-[400ms] 
      ${primary ? "bg-[#0055ff98]" : "bg-cards hover:bg-[#0057ff66] hover:scale-105"}
      ${soon && "bg-cards-soon"}`}
      >
        <span className="text-sm flex justify-between">
          {date}

          <span className='text-base'>{soon && 'em breve'}</span>
        </span>

        <h3 className="font-robotoCondensed text-xl font-thin mt-3" >
          {title}
        </h3>

        <span> {place} </span>

      </li>
    </a>
  )
}

export function Roadmap() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useMemo(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.ul
      className="flex flex-col items-center max-w-lg mx-auto"
      ref={ref}
      variants={ulVariant}
      initial="hidden"
      animate={control}
    >
      <Stack
        primary
        date={"▪ ago 2023 - atualmente"}
        title={"Desenvolvimento de Software Multiplataforma"}
        place={"FATEC Pref. Hirant Sanazar"}
      />

      <Stack
        date={"▪ fev 2019 - dez 2021"}
        title={"Tec. Desenvolvimento de Sistemas"}
        place={"ETEC Dr. Celso Giglio"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Introdução à computação e pensamentos computacionais"}
        place={"DIO - Digital Innovation One"}
        id={"8F2BF556"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Posicionando elementos com Flexbox em CSS"}
        place={"DIO - Digital Innovation One"}
        id={"85C5664F"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Módulo III - Dominando a Linguagem de Programação JavaScript"}
        place={"DIO - Digital Innovation One"}
        id={"B67A3FE0"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Módulo II - Fundamentos Web com HTML e CSS"}
        place={"DIO - Digital Innovation One"}
        id={"C926A682"}
      />

      <Stack
        date={"▪ março 2022"}
        title={"Javascript ES6 essencial"}
        place={"DIO - Digital Innovation One"}
        id={"890A1863"}
      />

      <Stack
        date={"▪ jan 2022"}
        title={"Programação para a internet com Javascript"}
        place={"DIO - Digital Innovation One"}
        id={"ACFBADF4"}
      />

      <Stack
        date={"▪ jan 2023"}
        title={"CS50"}
        place={"Harvard - Material cedido pela Fundação Estudar"}
        // id={"ACFBADF4"}
        soon
      />
    </motion.ul>
  )
}


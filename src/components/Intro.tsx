import { useEffect, useState } from "react";
import Link from 'next/link'

import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link as LinkScroll } from "react-scroll";

import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const introVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -200 }
}


export function Intro() {
  const [curriculum, setCurriculum] = useState("")
  const [animate, setAnimate] = useState(false)

  const mySkills = ["frontend developer", "web developer", "ui/ux", "fullstack"]

  let counter = 0
  const [skill, setSkill] = useState(counter)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkill(counter => counter === 3 ? counter = 0 : counter + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [])


  useEffect(() => {
    navigator.language.includes("en") ?
      setCurriculum("/resumes/Maxwell Curriculum(en).pdf") : setCurriculum("/resumes/Maxwell Currículo.pdf")

    setAnimate(true)
  }, [])

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.section
      className="w-full h-[80vh] 
      flex flex-col justify-center gap-10
      md:h-auto"

      ref={ref}
      variants={introVariant}
      initial="hidden"
      animate={control}
    >
      <div
        className="w-full flex flex-col gap-4 
        md:w-3/4 2xl:w-4/5"
      >
        <div
          className="border-l-8 border-secondary p-3
          md:p-5 md:py-7 flex flex-col gap-2"
        >
          <h1
            className="text-3xl md:text-4xl leading-7"
          >
            Olá, me chamo Maxwell
          </h1>

          <span
            className="relative py-1 pr-2
            font-robotoCondensed text-3xl font-light uppercase
            md:text-5xl w-fit select-none"
          >
            <span
              className={`bg-primary w-full h-full border-l-2 border-blue-500 
              absolute top-0 bottom-0  overflow-hidden
              ${animate && "animate-typing"}
              `}
            >
            </span>
            {mySkills[skill]}
          </span>
        </div>
        <p>
          A tecnologia facilita a vida das pessoas e muda o jeito que elas veem o mundo, eu quero fazer parte disso. Sou apaixonado por tecnologia, por sempre aprender coisas novas. Poder desenvolver qualquer coisa, e saber que aquilo pode mudar a vida de alguém, me deixa muito animado e é o que me move para frente.
        </p>

        <nav
          className="w-full flex flex-col gap-5 mt-10"
        >
          <a
            href={curriculum} download
            className="flex-1 md:w-fit text-center px-6 py-3 rounded-md
            text-btn text-base uppercase font-roboto 
            transition-all border border-secondary md:bg-secondary 
            hover:bg-hover-btn hover:-translate-y-1
            "
          >
            <DownloadIcon /> Baixar CV
          </a>

          <Link href="/portfolio">
            <span
              className="flex-1 md:hidden text-center px-6 py-3 rounded-md
              text-btn text-base uppercase font-roboto 
              transition-all bg-secondary 
              hover:bg-hover-btn hover:-translate-y-1"
            >
              Portfólio
            </span>
          </Link>

        </nav>
      </div>

      <LinkScroll
        activeClass="active"
        to="about"
        offset={-60}
        className="w-fit mt-5 mx-auto flex justify-center items-center flex-col group"
        delay={1000}
      >
        <KeyboardArrowDownIcon
          titleAccess="Arraste para baixo"
          fontSize="large"
          className="text-articles animate-bounce"
        />
      </LinkScroll>
    </motion.section>
  )
}



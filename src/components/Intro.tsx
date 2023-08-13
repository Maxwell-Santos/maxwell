import { useEffect } from "react"
import Link from "next/link"

import DownloadIcon from "@mui/icons-material/Download"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import { Link as LinkScroll } from "react-scroll"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Typewriter } from "react-simple-typewriter"

const introVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -200 },
}

export function Intro() {
  const mySkills = ["frontend developer", "web designer", "UI/UX", "fullstack"]
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
        md:w-3/5 2xl:w-4/5"
      >
        <div
          className="border-l-8 border-secondary p-3
          md:p-5 md:py-7 flex flex-col gap-2"
        >
          <h1 className="text-3xl md:text-4xl leading-7 font-inter">
            Olá, me chamo Maxwell
          </h1>

          <span
            className="relative py-1 pr-2 text-3xl uppercase
            md:text-5xl select-none flex items-center"
          >
            <Typewriter
              words={mySkills}
              loop
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>
        <p>
          A tecnologia facilita a vida das pessoas e muda o jeito que elas veem
          o mundo, eu quero fazer parte disso. Sou apaixonado por tecnologia,
          por sempre aprender coisas novas. Poder desenvolver qualquer coisa, e
          saber que aquilo pode mudar a vida de alguém, me deixa muito animado e
          é o que me move para frente.
        </p>

        <nav className="w-full flex flex-col gap-5 mt-10">
          <a
            href={"/resumes/maxwell-frontend.pdf"} download
            className="inline-block flex-1 md:w-fit text-center px-6 py-3 rounded-md
              text-btn text-base uppercase font-roboto tracking-wider
              transition-all border border-secondary md:bg-secondary
              hover:bg-transparent group"
          >
            <DownloadIcon /> currículo
         
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

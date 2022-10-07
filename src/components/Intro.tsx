import { useEffect, useState } from "react";
import AOS from "aos";

import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link } from "react-scroll";


export function Intro() {
  useEffect(() => { AOS.init() }, [])

  const mySkills = ["frontend developer", "web developer", "ui/ux", "fullstack"]
  
  let counter = 0
  const [skill, setSkill] = useState(counter)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkill(counter => counter === 3 ? counter = 0 : counter + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-[80vh] 
      flex flex-col justify-center gap-10
      md:h-auto"
    >
      <div
        data-aos="fade-right"
        className="w-full flex flex-col gap-4 
        md:w-3/4 2xl:w-4/5"
      >
        <div
          className="border-l-8 border-secondary p-3
          md:p-5 md:py-7"
        >
          <h1
            className="text-3xl md:text-4xl leading-9"
          >
            Olá, me chamo Maxwell
          </h1>

          <span
            className="relative py-1 pr-2
            font-robotoCondensed text-2xl font-light uppercase
            md:text-3xl"
          >
            <span
              className=" bg-primary w-full h-full border-l-2 border-blue-500 
              absolute top-0 bottom-0 
              animate-typing overflow-hidden"
            >
            </span>
            {mySkills[skill]}
          </span>
        </div>
        <p>
          A tecnologia facilita a vida das pessoas e muda o jeito que elas veem o mundo. Eu quero fazer parte disso, sou apaixonado por tecnologia, por sempre aprender coisas novas. Poder desenvolver qualquer coisa, e saber que aquilo pode mudar a vida de alguém, me deixa muito animado e é o que me move para frente.
        </p>

        <a
          href="/curriculoMaxwell.pdf" download
          className="w-fit bg-secondary px-6 py-2 rounded-md
          text-btn text-base font-bold font-roboto 
          transition-colors hover:bg-hover-btn"
        >
          <DownloadIcon /> Baixar CV
        </a>
      </div>

      <Link
        activeClass="active"
        to="about"
        offset={-60}
        className="w-fit mt-5 mx-auto flex justify-center items-center flex-col group"
      >
        <KeyboardArrowDownIcon
          titleAccess="Arraste para baixo"
          fontSize="large"
          className="text-articles animate-bounce"
        />
      </Link>
    </section>
  )
}



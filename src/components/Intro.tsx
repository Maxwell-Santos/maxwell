import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { Link } from "react-scroll";

export function Intro() {
  let counter = 0

  const mySkills = ['frontend developer', 'web developer', 'ui/ux', 'fullstack']
  const [skill, setSkill] = useState(counter)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkill(counter => counter === 3 ? counter = 0 : counter + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => { AOS.init() }, [])
  
  return (
    <section
      className="w-full h-[80vh] md:h-auto flex flex-col justify-center gap-10"
    >
      <div className="w-full md:w-3/4 2xl:w-4/5 flex flex-col gap-4" data-aos="fade-right">
        <div
          className="border-l-8 border-secondary p-3 md:p-5 md:py-7 max-w-fit"
        >
          <h1
            className="text-3xl md:text-4xl leading-9"
          >
            Olá, me chamo Maxwell
          </h1>
          <span
            className="relative py-1 font-robotoCondensed text-2xl md:text-3xl font-light uppercase pr-2"
          >
            <span
              className="absolute bg-primary w-full h-full border-l-2 border-blue-500 animate-typing overflow-hidden"
            >
            </span>
            {mySkills[skill]}
          </span>
        </div>
        <p>
          A tecnologia facilita a vida das pessoas e muda o jeito que elas veem o mundo. Eu quero fazer parte disso, sou apaixonado por tecnologia, por sempre aprender coisas novas. Poder desenvolver qualquer coisa, e saber que aquilo pode mudar a vida de alguém, me deixa muito animado e é o que me move para frente.
        </p>

        <a
          href='/curriculoMaxwell.pdf' download
          className="bg-secondary text-btn px-6 py-2 rounded-md font-bold font-roboto text-base w-fit transition-colors hover:bg-hover-btn"
        >
          <DownloadIcon /> Baixar CV
        </a>
      </div>

      <Link
        activeClass="active"
        to='about'
        offset={-60}
        className='mx-auto flex justify-center items-center flex-col group w-fit mt-5'
      >
        <KeyboardArrowDownIcon
          titleAccess='Arraste para baixo'
          fontSize='large'
          className='text-articles animate-bounce'
        />


      </Link>
    </section>
  )
}



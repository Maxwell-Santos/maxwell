import DownloadIcon from '@mui/icons-material/Download';
import AOS from 'aos';
import Image from 'next/future/image';
import { useEffect } from 'react';
import Circle1 from '../../public/circle1.svg';

export function Intro() {
  useEffect(() => {AOS.init()},[])

  return (
    <section
      className="mt-10 w-full"
    >
      <div className="w-full md:w-3/4 2xl:w-4/5 flex flex-col gap-4" data-aos="fade-right">
        <div
          className="border-l-8 border-secondary p-3 md:p-5 md:py-7"
        >
          <h1
            className="text-3xl md:text-4xl leading-9"
          >
            Olá, me chamo Maxwell
          </h1>
          <span
            className="font-robotoCondensed text-2xl md:text-3xl font-light"
          >
            WEB DEVELOPER
          </span>
        </div>
        <p>
          A tecnologia facilita a vida das pessoas e muda o jeito que elas veem o mundo. Eu quero fazer parte disso, sou apaixonado por tecnologia, por sempre aprender coisas novas. Poder desenvolver qualquer coisa, e saber que aquilo pode mudar a vida de alguém, me deixa muito animado e é o que me move para frente.
        </p>

        <a
          href='/curriculoMaxwell.pdf' download
          className="bg-secondary text-btn px-6 py-2 rounded-md font-bold font-roboto text-base w-fit transition-colors hover:bg-hover-btn"
        >
          <DownloadIcon/> Baixar CV
        </a>
      </div>

      <Image
        src={Circle1}
        alt="circle1"
        className='absolute right-0 -top-9 -z-50'
      />
    </section>
  )
}



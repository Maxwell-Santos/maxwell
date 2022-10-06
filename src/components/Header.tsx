import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
interface HeaderProps {
  page?: string;
}

type header = 'hidden' | 'flex'

export function Header({ page }: HeaderProps) {

  const [expand, setExapnd] = useState<header>('hidden')

  function setTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {page == "portfolio" ?
        (
          <header
            className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm p-3 md:px-16 flex justify-between items-center border-b-2 border-b-header"
          >
            <Link
              href="/"
            >
              <h2
                className="cursor-pointer"
              >
                MINHA LOGO</h2>
            </Link>

          </header>

        ) : (

          <header
            className="fixed bottom-0 md:bottom-auto md:top-0 left-0 right-0 z-10 
            backdrop-blur-sm p-3 md:px-16 flex justify-between md:items-center 
            border-t-2 border-t-header 
            md:border-b-2 md:border-b-header 
            transition-all
            "
          >
            <div onClick={() => setTop()}>
              <h2>MINHA LOGO</h2>
            </div>


            <nav
              className="md:hidden text-[16px] flex flex-col gap-3 md:gap-5 items-end"
            >
              <button
                className="ml-auto flex flex-col items-end"
                onClick={() => setExapnd(value => value == 'hidden' ? value = 'flex' : 'hidden')}
              >
                <div
                  className="w-6 h-[2px] bg-white"
                ></div>
                <div
                  className="w-7 h-[2px] bg-white my-[6px]"
                ></div>
                <div
                  className="w-6 h-[2px] bg-white"
                ></div>
              </button>

              <div
                className={`${expand} flex-col gap-2 items-end transition-all`}
              >

                <ScrollLink
                  to='about'
                  offset={-25}
                  className="hover:text-secondary focus:text-secondary transition-all"
                >
                  Sobre
                </ScrollLink>

                <ScrollLink
                  to='contact'
                  offset={-70}
                  className="border border-btn-secondary rounded-md p-1 px-2 hover:text-secondary hover:border-secondary focus:text-secondary focus:border-secondary transition-colors"
                >
                  Contato
                </ScrollLink>

                <Link href="/portfolio">
                  <a
                    className="bg-secondary p-1 px-2 text-btn uppercase font-robotoCondensed rounded-md flex items-center font-medium tracking-wider transition-colors hover:bg-hover-btn w-full md:w-fit"
                  >
                    Portfólio
                  </a>
                </Link>
              </div>
            </nav>


            {/*HEADER VERSÃO DESKTOP*/}
            <nav
              className="hidden md:flex text-[16px]"
            >
              <div
                className={`flex gap-4 items-center transition-all`}
              >
                <ScrollLink
                  to="about"
                  offset={-70}
                  className="hover:text-secondary focus:text-secondary transition-all"
                >
                  Sobre
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  offset={-70}
                  className="border border-btn-secondary rounded-md p-1 px-2 hover:text-secondary hover:border-secondary focus:text-secondary focus:border-secondary transition-colors"
                >
                  Contato
                </ScrollLink>

                <Link href="/portfolio">
                  <span
                    className="bg-secondary p-1 px-2 text-btn uppercase font-robotoCondensed rounded-md flex items-center font-medium tracking-wider transition-colors hover:bg-hover-btn w-full md:w-fit cursor-pointer"
                  >
                    Portfólio
                  </span>
                </Link>
              </div>

            </nav>

          </header>
        )}
    </>
  )
}



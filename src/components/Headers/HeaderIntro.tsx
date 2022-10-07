import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import SegmentIcon from '@mui/icons-material/SegmentRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';

type header = 'hidden' | 'flex'

export function HeaderIntro() {
  const [expand, setExapnd] = useState<header>('hidden')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(screen.width)
  }, [])


  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    newOpen = !newOpen
    setOpen(newOpen);
  };

  return (
    <>

      {
        width <= 700 ? (
          <>
            <div
              onClick={() => window.scrollTo(0, 0)}
              className="p-4"
            >
              <h2>MINHA LOGO</h2>
            </div>


            <SwipeableDrawer
              anchor="bottom"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={40}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true
              }}
            >

              <div
                className="absolute -top-12 left-0 right-0 h-12 rounded-t-2xl z-50 visible bg-contact backdrop-blur-sm
                flex justify-end px-4 border-t-2 border-header"
              >
                <button
                  onClick={() => setOpen(!open)}
                  className="text-white h-full"
                >
                  {
                    !open ? (
                      <SegmentIcon
                        fontSize="large"
                      />

                    ) : (
                      <CloseIcon
                        fontSize="large"
                      />
                    )
                  }
                </button>
              </div>

              <nav
                className="md:hidden text-[16px] flex flex-col gap-3 md:gap-5 items-end p-4 z-10 h-full bg-contact backdrop-blur-sm "
              >
                <div
                  className={`flex flex-col gap-2 items-end transition-all`}
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
                    className="border border-btn-secondary rounded-md p-1 px-5 hover:text-secondary hover:border-secondary focus:text-secondary focus:border-secondary transition-colors"
                  >
                    Contato
                  </ScrollLink>

                  <Link href="/portfolio">
                    <a
                      className="bg-secondary p-1 px-5 text-btn uppercase font-robotoCondensed rounded-md flex items-center font-medium tracking-wider transition-colors hover:bg-hover-btn w-full md:w-fit"
                    >
                      Portfólio
                    </a>
                  </Link>
                </div>
              </nav>
            </SwipeableDrawer>
          </>


        ) : (

          //DESKTOP

          <header
            className="fixed top-0 left-0 right-0 z-10 
          backdrop-blur-sm p-3 px-16 flex justify-between items-center 
          border-b-2 border-b-header 
          transition-all"
          >
            <div onClick={() => window.scrollTo(0, 0)}>
              <h2>MINHA LOGO</h2>
            </div>

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
          </header >
        )
      }
    </>
  )
}

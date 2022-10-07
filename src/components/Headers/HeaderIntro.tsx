import Link from "next/link";
import { useEffect, useState } from "react";

import { Link as ScrollLink } from 'react-scroll';

import SegmentIcon from '@mui/icons-material/SegmentRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export function HeaderIntro() {
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
              swipeAreaWidth={56}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true
              }}
            >

              <div
                className="absolute -top-14 left-0 right-0 h-14 rounded-t-2xl 
                bg-primary px-5 py-3 border-t-2 border-header
                flex justify-between z-50 visible"
              >

                <Link href="/portfolio">
                  <a
                    className="border border-secondary px-5 w-fit
                    text-btn uppercase font-robotoCondensed font-medium tracking-wider rounded-md 
                    flex items-center transition-colors hover:bg-hover-btn"
                  >
                    Portfólio
                  </a>
                </Link>

                <button
                  onClick={toggleDrawer(!open)}
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
                className="text-[16px] p-4 h-full flex flex-col gap-3 items-end bg-primary
                md:gap-5 z-10"
              >

                <div
                  className="flex flex-col gap-2 items-end transition-all"
                >
                  <ScrollLink
                    to='about'
                    offset={-25}
                    className="text-lg
                    hover:text-secondary 
                    focus:text-secondary 
                    transition-all"
                  >
                    Sobre
                  </ScrollLink>

                  <ScrollLink
                    to='contact'
                    offset={-70}
                    className="text-lg 
                    hover:text-secondary hover:border-secondary 
                    focus:text-secondary focus:border-secondary 
                    transition-all"
                  >
                    Contato
                  </ScrollLink>

                </div>

                <div
                  className="flex w-full justify-evenly gap-2 flex-wrap"
                >
                  <a href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
                    rel="noreferrer"
                    target="_black"
                  >
                    <span
                      className="flex items-center p-2 bg-cards rounded-md text-green-500 gap-2"
                    >
                      <WhatsAppIcon
                        fontSize="large"
                      />
                    </span>
                  </a>

                  <a href="https://www.instagram.com/this_maxwell/"
                    rel="noreferrer"
                    target="_black"
                  >
                    <span
                      className="flex items-center p-2 bg-cards rounded-md text-pink-700 gap-2"
                    >
                      <InstagramIcon
                        fontSize="large"
                      />
                    </span>
                  </a>

                  <a href="https://www.linkedin.com/in/maxwell-santos-2ab722210"
                    rel="noreferrer"
                    target="_black"
                  >
                    <span
                      className="flex items-center p-2 bg-cards rounded-md text-sky-500 gap-1"
                    >
                      <LinkedInIcon
                        fontSize="large"
                      />
                    </span>
                  </a>
                </div>
              </nav>
            </SwipeableDrawer>
          </>
        ) : (

          //DESKTOP
          <header
            className="fixed top-0 left-0 right-0 z-10 
          p-3 px-16 flex justify-between items-center 
          border-b-2 border-b-header 
          backdrop-blur-sm 
          transition-all"
          >
            <div onClick={() => window.scrollTo(0, 0)}>
              <h2>MINHA LOGO</h2>
            </div>

            <nav
              className="hidden md:flex text-[16px]"
            >
              <div
                className="flex gap-4 items-center transition-all"
              >
                <ScrollLink
                  to="about"
                  offset={-70}
                  className="hover:text-secondary 
                  focus:text-secondary transition-all"
                >
                  Sobre
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  offset={-70}
                  className="border border-btn-secondary rounded-md p-1 px-2 
                  hover:text-secondary hover:border-secondary 
                  focus:text-secondary focus:border-secondary 
                  transition-colors"
                >
                  Contato
                </ScrollLink>

                <Link href="/portfolio">
                  <span
                    className="bg-secondary p-1 px-2 rounded-md
                    text-btn uppercase font-robotoCondensed font-medium tracking-wider 
                    flex items-center transition-all hover:bg-hover-btn w-full 
                    md:w-fit 
                    cursor-pointer"
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

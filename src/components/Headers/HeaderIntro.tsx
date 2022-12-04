import Link from "next/link";
import { useEffect, useState } from "react";

import { Link as ScrollLink } from 'react-scroll';
import Logo from '../Logo';

import SegmentIcon from '@mui/icons-material/SegmentRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { RedesSociais } from "../RedesSociais";

export function HeaderIntro() {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(screen.width)
    })
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
        width <= 767 ? (

          //MOBILE
          <>
            <div
              className={`fixed top-0 right-0 left-0 px-4
              ${!open && 'border-b-2 border-b-header backdrop-blur-sm'}
              flex items-center justify-between z-[9999]
              md:invisible
              `}
            >
              <div
                onClick={() => window.scrollTo(0, 0)}
                className={`${open && 'invisible'}`}
              >
                <Logo />
              </div>

              <button
                onClick={toggleDrawer(open)}
                className={`text-white z-[9999]`}
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

            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={15}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true
              }}
            >

              <nav
                className="text-[16px] p-7 h-full flex flex-col justify-center bg-primary
                md:gap-5"
              >

                <div
                  className="w-full my-3 flex-[0.6] flex flex-col gap-2 transition-all"
                >

                  <div className="flex-1 flex flex-col items-center justify-center gap-5">
                    <ScrollLink
                      to='about'
                      offset={-25}
                      className="text-xl uppercase
                        hover:text-secondary
                        focus:text-secondary
                        transition-all"
                        
                    >
                      Sobre
                    </ScrollLink>
                    <ScrollLink
                      to='contact'
                      offset={-70}
                      className="text-xl uppercase
                        hover:text-secondary hover:border-secondary
                        focus:text-secondary focus:border-secondary
                        transition-all"
                        
                    >
                      Contato
                    </ScrollLink>
                  </div>

                  <div className="w-full border-t-[0.5px] border-articles border-opacity-10 mt-auto py-4 ">
                    <Link href="/portfolio">
                      <span
                        className="p-2 w-full
                      text-btn uppercase font-robotoCondensed font-medium tracking-wider rounded-md
                      flex items-center justify-center transition-colors bg-secondary text-lg"
                      
                      >
                        Portfólio
                      </span>
                    </Link>
                  </div>

                </div>

                {/*social media */}
                <div
                  className="flex w-full justify-end gap-4 flex-wrap"
                >
                <RedesSociais mobile/>
                </div>
              </nav>
            </SwipeableDrawer>
          </>

        ) : (

          //DESKTOP
          <header
            className={`fixed top-0 left-0 right-0 z-10 
          px-8 flex justify-between items-center 
          border-b-2 border-b-header backdrop-blur-sm
          transition-all
          `}
          >
            <div onClick={() => window.scrollTo(0, 0)}>
              <Logo />
            </div>

            <nav
              className="flex text-[16px] items-center"
            >
              <div
                className="flex gap-3 items-center transition-all"
              >
                <ScrollLink
                  to="about"
                  offset={-70}
                  className="p-1
                  hover:text-secondary 
                  focus:text-secondary transition-all cursor-pointer"
                  
                >
                  Sobre
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  offset={-70}
                  className="p-2 relative overflow-hidden
                  hover:text-btn
                  focus:text-btn
                  hover:border-secondary 
                  focus:border-secondary 
                  transition-all
                  cursor-pointer
                  rounded-sm
                  group"
                  
                >
                  Contato

                  <span
                    className="absolute inset-0 translate-y-full bg-secondary
                  transition-all
                  -z-10
                  group-hover:translate-y-0 
                  group-focus:translate-y-0"
                  ></span>
                </ScrollLink>

                <Link href="/portfolio">
                  <span
                    className="bg-secondary p-2 py-3
                    text-btn uppercase font-robotoCondensed font-medium tracking-wider 
                    flex items-center
                    hover:bg-hover-btn 
                    transition-all
                    w-fit 
                    cursor-pointer"
                    
                  >
                    Portfólio
                  </span>
                </Link>
              </div>

              <a href="https://github.com/Maxwell-Santos"
              target="_blank"
              rel="noreferrer"
              >
                
                <GitHubIcon
                fontSize="large"
                className="ml-5 text-articles hover:text-secondary transition-all"
                />
              </a>
            </nav>
          </header >
        )
      }
    </>
  )

}
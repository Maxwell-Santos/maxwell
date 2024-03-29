import Link from "next/link"
import { useEffect, useState } from "react"

import { Link as ScrollLink } from 'react-scroll'
import Logo from '../Logo'

import SegmentIcon from '@mui/icons-material/SegmentRounded'
import CloseIcon from '@mui/icons-material/CloseRounded'

import GitHubIcon from '@mui/icons-material/GitHub'
import SwipeableDrawer from "@mui/material/SwipeableDrawer"

import { RedesSociais } from "../RedesSociais"

export function HeaderIntro() {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(screen.width)
    })
    setWidth(screen.width)
  }, [])


  const [open, setOpen] = useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    newOpen = !newOpen
    setOpen(newOpen)
  }

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
                className="text-[16px] p-7 h-full flex flex-col justify-center bg-primary/50 backdrop-blur-md
                md:gap-5"
              >

                <div
                  className="w-full my-3 flex-[0.6] flex flex-col gap-2 transition-all"
                >

                  <div className="flex-1 flex flex-col items-center justify-center gap-5">
                    <ScrollLink
                      to='about'
                      offset={-70}
                      onClick={toggleDrawer(open)}
                      className="text-xl uppercase
                        hover:text-secondary
                        focus:text-secondary
                        transition-all"
                    >
                      Sobre
                    </ScrollLink>
                    <ScrollLink
                      to='contact'
                      // offset={-70}
                      onClick={toggleDrawer(open)}
                      className="text-xl uppercase
                      hover:text-secondary hover:border-secondary
                      focus:text-secondary focus:border-secondary
                      focus:border-b
                      transition-all"

                    >
                      Contato
                    </ScrollLink>
                  </div>

                  {/* <div className="w-full border-t-[0.5px] border-articles border-opacity-10 mt-auto">
                  </div> */}
                  <fieldset className='bg-white/50 w-full h-[.5px] mb-3'></fieldset>

                </div>

                {/*social media */}
                <div
                  className="flex w-full justify-end gap-4 flex-wrap items-center"
                >

                  <RedesSociais mobile />
                </div>

              </nav>
            </SwipeableDrawer>
          </>

        ) : (

          //DESKTOP
          <header
            className="fixed top-0 left-0 right-0 z-10 px-8 flex justify-between items-center border-b-2 border-b- backdrop-blur-sm transition-all"
          >
            <div onClick={() => window.scrollTo(0, 0)}>
              <Logo />
            </div>

            <nav
              className="flex text-sm items-center lowercase"
            >
              <div
                className="flex gap-3 items-center"
              >
                <ScrollLink
                  to="about"
                  offset={-70}
                  className="hover:text-btn focus:text-btn cursor-pointer">
                  Sobre
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  offset={-70}
                  className="hover:text-btn focus:text-btn cursor-pointer">
                  Contato
                </ScrollLink>

                <Link href="/portfolio">
                  <a
                    className="bg-secondary p-2 px-3 rounded-md
                    text-btn
                    flex items-center
                    hover:bg-hover-btn 
                    transition-all
                    w-fit 
                    cursor-pointer">
                    Projetos
                  </a>
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
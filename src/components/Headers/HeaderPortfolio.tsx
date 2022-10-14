import { useEffect } from "react";
import Link from "next/link";
import AOS from 'aos'

import Image from 'next/future/image'

export function HeaderPortfolio() {
  useEffect(() => { AOS.init() }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm px-8 flex justify-between items-center border-b-2 border-b-header"
      data-aos="fade-down"
    >
      <Link
        href="/"
      >
        <Image
          src='/icons/logoMaxCompletoClaro.png'
          alt="Logo do site do Maxwell"
          width={140}
          height={0}
          className="cursor-pointer"
        />
      </Link>

    </header>
  )
}

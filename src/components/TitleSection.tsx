import { useEffect } from "react"
import AOS from 'aos'

type Title = {
  title: string
}

export function TitleSection({ title }: Title) {
  useEffect(() => {AOS.init()},[])

  return (
    <div 
    data-aos="fade-right" 
    className={`w-full flex justify-end py-3 ${title == 'Skills' && 'px-6 md:px-12 '}`}
    >
      <h2
        id={title}
        className="w-[150px] border-b-8 border-secondary text-end font-bold text-2xl uppercase
        md:text-3xl md:w-[17%]"
      >
        {title}
      </h2>
    </div>
  )
}

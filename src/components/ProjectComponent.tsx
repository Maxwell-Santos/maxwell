import GitHubIcon from '@mui/icons-material/GitHub';
import InputIcon from '@mui/icons-material/Input';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectWithImageProps } from "../interfaces/RepositoriesProps";

interface ProjectComponentProps {
  data: ProjectWithImageProps;
}

export function ProjectComponent({ data }: ProjectComponentProps) {

  const [languages, setLanguages] = useState(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    fetch(data.languages_url)
      .then(response => response.json())
      .then(data => setLanguages(data))


  }, [data.languages_url])

  const name = data.name.replaceAll("-", " ")

  return (
    <div
      className="relative transition-all md:overflow-hidden group h-full z-0 flex flex-col-reverse"
    >
      <div
        className="static left-0 right-0 bottom-6 duration-500 transition-all delay-150 z-10 p-3 h-fit flex flex-col gap-5 border border-cards 
         md:border-none
         md:absolute md:gap-8 md:bg-black
         md:p-6 md:bottom-0 md:opacity-0
         md:group-hover:translate-y-0 md:group-hover:opacity-100 
         md:translate-y-full"
      >
        <h3
          className="uppercase text-title text-base sm:text-md md:text-2xl font-thin inline-block"
        >
          {name}
        </h3>
        <p>
          {languages ? (
            Object.keys(languages).map((language, index) => {
              return (
                <span
                  key={language}
                  className={`mx-1 p-1 px-2 rounded-full text-white bg-stone-100/20 text-xs 
                ${index == 0 && 'text-secondary border border-secondary font-bold'}`}
                >
                  {language}
                </span>
              )
            })

          ) : 'bom dia'
          }
        </p>

        <div
          className="flex justify-between flex-1 items-center gap-2"
        >

          <a href={`http://${data.homepage}`} target="_blank" rel="noreferrer"
            className="p-2 py-1 rounded-md font-semibold visit"
            title='visitar site online'
          >
            <InputIcon />
          </a>

          <a href={data.html_url} target="_blank" rel="noreferrer"
            className="bg-secondary p-3 py-1 rounded-md font-semibold flex items-center gap-1 text-sm"
            title='ver no github'
          >
            ver no Github <GitHubIcon />
          </a>
        </div>

      </div>

      {data.img ?
        <Image
          src={data.img}
          alt="Banner do projeto"
          height={500}
          width={800}
          objectFit={"cover"}
        />
        : (
          <div
            className='w-full h-full grid place-items-center pointer-events-none'
          >
            <CircularProgress color="inherit" />
          </div>
        )
      }
    </div>
  )
}
import { useEffect, useState } from 'react';
import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';
import InputIcon from '@mui/icons-material/Input';

import CircularProgress from '@mui/material/CircularProgress';

//INTERFACE
import { ProjectWithImageProps } from "../interfaces/RepositoriesProps";
interface ProjectComponentProps {
  data: ProjectWithImageProps;
}

export function ProjectComponent({ data }: ProjectComponentProps) {

  const [languages, setLanguages] = useState(null)

  useEffect(() => {
    fetch(data.languages_url)
      .then(response => response.json())
      .then(data => setLanguages(data))

  }, [data.languages_url])

  const name = data.name.replaceAll("-", " ")

  return (
    <div
      className="relative group h-full flex flex-col-reverse 
      transition-all 
      md:overflow-hidden 
      z-0"

    >
      <div
        className="p-3 w-full h-fit flex flex-col gap-5 
        border border-cards
        transition-all z-10
        md:border-none  
        md:absolute md:p-6 md:bottom-0
        md:opacity-0 md:gap-8 md:bg-primary/80 md:backdrop-blur-sm 
        md:translate-y-full
        delay-150 
        left-0 right-0 bottom-6 duration-500

        md:group-hover:translate-y-0 
        md:group-hover:opacity-100"
      >
        <h3
          className="text-title text-base uppercase font-thin inline-block
          sm:text-md 
          md:text-2xl"
        >
          {name}
        </h3>
        <div>
          {
            languages ? (
              Object.keys(languages).map((language, index) => {
                return (
                  <span
                    key={language}
                    className={`text-white text-xs 
                  mx-1 p-1 px-2 rounded-full relative
                ${index == 0 ? "bg-secondary" : "bg-stone-100/20"}`}
                  >
                    {language}
                  </span>
                )
              })
            ) : (
              <div>
                <span
                  className="bg-stone-100/20 text-white text-xs mx-1 p-1 px-2 rounded-full w-12 inline-block py-2 animate-pulse"
                ></span>
                <span
                  className="bg-stone-100/20 text-white text-xs mx-1 p-1 px-2 rounded-full w-12 inline-block py-2 animate-pulse"
                ></span>
                <span
                  className="bg-stone-100/20 text-white text-xs mx-1 p-1 px-2 rounded-full w-12 inline-block py-2 animate-pulse"
                ></span>
              </div>
            )}

        </div>

        <div
          className="flex flex-row-reverse justify-between flex-1 items-center gap-2"
        >

          <a href={`http://${data.homepage}`} target="_blank" rel="noreferrer"
            title="visitar site online"
            className="p-2 py-1 rounded-md font-semibold"
            translate='yes'
          >
            Visitar <InputIcon />
          </a>

          <a href={data.html_url} target="_blank" rel="noreferrer"
            title="ver no github"
            className="bg-secondary p-3 py-1 rounded-md font-semibold text-sm
            flex items-center gap-1 transition-all
          hover:bg-hover-btn 
          focus:bg-hover-btn"
            translate='yes'
          >
            ver no Github <GitHubIcon />
          </a>
        </div>

      </div>

      {
        data.img ?
          <Image
            src={data.img}
            alt="Banner do projeto"
            height={500}
            width={800}
            objectFit={"cover"}
            className="transition all"
            placeholder='blur'
          />
          : (
            <div
              className="w-full h-full 
              grid place-items-center 
              pointer-events-none"
            >
              <CircularProgress color="inherit" />
            </div>
          )
      }
    </div>
  )
}
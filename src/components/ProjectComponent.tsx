import GitHubIcon from '@mui/icons-material/GitHub';
import InputIcon from '@mui/icons-material/Input';
import Image from "next/image";
import { useEffect, useState } from 'react';
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
      className="relative transition-all overflow-hidden group z-0"
    >
      <div
        className="absolute inset-0 top-20 duration-500 group-hover:translate-y-0 group-hover:opacity-90 translate-y-full bg-black opacity-0 z-10 p-6 transition-all delay-150 flex flex-col"
      >
        <h3
          className="uppercase text-title text-2xl font-thin flex-1"
        >
          {name}
        </h3>

        <p>
          {languages ? (
            Object.keys(languages).map(language => {
              return <span key={language} className=' mx-1 p-1 px-2 rounded-full bg-stone-100/20 text-xs'>{language}</span>
            })

          ) : 'bom dia'
          }
        </p>

        <div
          className="flex justify-between flex-1 items-end gap-2"
        >

          <a href={`http://${data.homepage}`} target="_blank" rel="noreferrer"
            className="p-2 py-1 rounded-md font-semibold visit"
            title='visitar site online'
          >
            <InputIcon />
          </a>
          <a href={data.html_url} target="_blank" rel="noreferrer"
            className="bg-secondary p-3 py-1 rounded-md font-semibold flex items-center gap-1"
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
          height={360}
          width={640}
          objectFit={"cover"}
        />
      : 'não carregou ainda a img'
      }
    </div>
  )
}
import Image from "next/image";
import { ProjectWithImageProps } from "../interfaces/RepositoriesProps";
interface ProjectComponentProps{
  data: ProjectWithImageProps;
}

export function ProjectComponent({data}: ProjectComponentProps) {

  const name = data.name.replaceAll("-"," ")

  return (
   <div
   className="relative transition-all overflow-hidden group z-0" 
   >
    <div
    className="absolute inset-0 top-20 duration-500 group-hover:translate-y-0 group-hover:opacity-90 translate-y-full bg-black opacity-0 z-10 p-6 transition-all"
    >
      <h2
      className="uppercase text-title"
      >
        {name}
      </h2>

    </div>
    <a href={data.html_url} target="_blank" rel="noreferrer">
      <Image 
      src={data.img}
      alt="Banner do projeto"
      height={350}
      width={600}
      objectFit="fill"
      />

      {/* <h1>{data.name}</h1> */}
    </a>
   </div>
 )
}



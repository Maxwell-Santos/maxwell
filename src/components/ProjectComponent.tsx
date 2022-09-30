import Image from "next/future/image";
import { ProjectWithImageProps } from "../interfaces/RepositoriesProps";
interface ProjectComponentProps{
  data: ProjectWithImageProps;
}

export function ProjectComponent({data}: ProjectComponentProps) {
  return (
   <div
   className="transition-all group overflow-hidden"
   >
    <a href={data.html_url} target="_blank" rel="noreferrer">
      <Image 
      src={data.img}
      alt="Banner do projeto"
      height={300}
      width={600}
      className="transition-all mx-auto"
      />

      {/* <h1>{data.name}</h1> */}
    </a>
   </div>
 )
}



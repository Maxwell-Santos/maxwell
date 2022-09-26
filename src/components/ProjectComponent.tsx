interface ProjectComponentProps{
  data: RepositoriesProps;
}

interface RepositoriesProps{
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  languages_url: string;
}

export function ProjectComponent({data}: ProjectComponentProps) {
  return (
   <div
   className="flex-1"
   >
    <h1>{data.name}</h1>
   </div>
 )
}



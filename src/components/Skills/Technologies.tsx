import Image from "next/future/image"

interface TechProps{
  name: string,
  img?: any
}
export function Technologies({name, img}:TechProps) {

  return (
   <div
   className="p-4 py-4 border-skills rounded-md 
   flex flex-col items-center justify-center gap-2
   md:flex-row 
   md:justify-start
   md:p-6 border"
   >
    <Image
    src={img}
    alt={`logo da tecnologia ${name}`}
    width={50}    
    />
    <span
    className="text-sm hidden font-medium uppercase md:block md:text-base"
    >
    {name}
    </span>
   </div>
 )
}

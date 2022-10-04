import Image from "next/future/image"

interface TechProps{
  name: string,
  img?: any
}
export function Technologies({name, img}:TechProps) {

  return (
   <div
   className="p-4 py-4 md:p-6 border border-skills rounded-md flex flex-col md:flex-row items-center justify-center md:justify-start gap-2"
   >
    <Image
    src={img}
    alt={`logo da tecnologia ${name}`}
    width={50}    
    />
    <span
    className="text-sm hidden md:block md:text-base font-medium uppercase"
    >
    {name}
    </span>
   </div>
 )
}

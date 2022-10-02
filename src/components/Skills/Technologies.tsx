import Image from "next/future/image"

interface TechProps{
  name: string,
  img?: any
}
export function Technologies({name, img}:TechProps) {

  return (
   <div
   className="p-4 py-4 md:py-6 border border-skills rounded-md flex items-center gap-2"
   >
    <Image
    src={img}
    alt={`logo da tecnologia ${name}`}
    width={50}    
    />
    <span
    className="text-lg font-medium font-roboto uppercase"
    >
    {name}
    </span>
   </div>
 )
}

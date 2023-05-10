import Image from "next/future/image"

interface TechProps {
  name: string
  img?: any
}
export function TechnologiesCard({ name, img }: TechProps) {
  return (
    <div
      className="p-4 py-4 border-skills border rounded-md 
   flex flex-col items-center justify-center gap-2 w-full max-w-md md:flex-row  md:justify-start md:p-6 hover:shadow hover:shadow-white/10 transition-all"
    >
      <Image src={img} alt={`logo da tecnologia ${name}`} width={50} />

      <span className="font-inter text-sm hidden font-light md:block md:text-lg">
        {name}
      </span>
    </div>
  )
}

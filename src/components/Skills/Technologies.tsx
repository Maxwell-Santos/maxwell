
interface TechProps{
  name: string,
  img?: HTMLImageElement
}
export function Technologies({name, img}:TechProps) {

  return (
   <div
   className="p-4 py-4 md:py-6 border border-skills rounded-md flex items-center"
   >
    {name}
   </div>
 )
}

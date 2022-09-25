
type Title = {
  title: string
}
export function TitleSection({ title }: Title) {

  return (
    <div 
    className="w-full flex justify-end py-3">
      <h2
        className="border-b-8 border-secondary text-end font-bold text-2xl md:text-3xl uppercase right-16 w-[150px] md:w-[17%]"
        id={title}
      >
        {title}
      </h2>
    </div>
  )
}

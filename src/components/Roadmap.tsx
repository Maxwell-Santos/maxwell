interface StackProps {
  date: string;
  title: string;
  place: string;
  primary?: boolean;
}

function Stack({ date, place, title, primary }: StackProps) {
  return (

    <li 
    className={`
    ${primary ? "bg-[#0057ff66]" : "bg-cards"}
    px-2 py-3 md:px-4 md:py-6  rounded-lg max-h-max md:rounded-2xl rounded-tl-none rounded-bl-none border-l-4 border-secondary mb-2
    max-w-lg
    `}
    >

      <span className="text-sm">
        {date}
      </span>
      
      <h3 className="font-robotoCondensed text-xl leading-6 md:text-2xl font-thin mt-3">
        {title}
      </h3>
      
      <span> {place} </span>
    </li>
  )
}

export function Roadmap() {

  return (
    <ul
    >
      <Stack 
        date={"▪ fev 2019 - dez 2021"} 
        title={"Tec. Desenvolvimento de Sistemas"} 
        place={"ETEC Dr. Celso Giglio"} 
        primary={true}
      />

      <Stack 
        date={"▪ fev 2022"} 
        title={"Programação para a internet com Javascript"} 
        place={"DIO - Digital Inovation One"} 
      />

      <Stack 
        date={"▪ março 2022"} 
        title={"Javascript ES6 essencial"} 
        place={"DIO - Digital Inovation One"} 
      />

      <Stack 
        date={"▪ junho 2022"} 
        title={"Introdução à computação e pensamentos computacionais"} 
        place={"DIO - Digital Inovation One"} 
      />
    </ul>
  )
}


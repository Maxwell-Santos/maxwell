interface StackProps {
  date: string;
  title: string;
  place: string;
  primary?: boolean;
  id?: string;
}

function Stack({ date, place, title, primary, id }: StackProps) {

  return (
    <a
      href={`${primary ? '#' : `https://www.dio.me/certificate/${id}/`}`}
      target={'_blank'} rel="noreferrer"
      className={`${primary && 'pointer-events-none'} flex-1 w-full`}
    >
      <li
        className={`px-2 py-3 mb-2 max-h-max 
          rounded-lg rounded-tl-none rounded-bl-none 
          border-l-4 border-secondary 
          md:px-4 md:py-6 transition-all duration-[400ms] 
      ${primary ? "bg-[#0055ff98]" : "bg-cards hover:bg-[#0057ff66] hover:scale-105"} `}
      >
        <span className="text-sm">
          {date}
        </span>

        <h3 className="font-robotoCondensed text-xl font-thin mt-3">
          {title}
        </h3>

        <span> {place} </span>

      </li>
    </a>
  )
}

export function Roadmap() {

  return (
    <ul className="flex flex-col items-center max-w-lg mx-auto">
      <Stack
        primary
        date={"▪ fev 2019 - dez 2021"}
        title={"Tec. Desenvolvimento de Sistemas"}
        place={"ETEC Dr. Celso Giglio"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Introdução à computação e pensamentos computacionais"}
        place={"DIO - Digital Inovation One"}
        id={"8F2BF556"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Posicionando elementos com Flexbox em CSS"}
        place={"DIO - Digital Inovation One"}
        id={"85C5664F"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Módulo III - Dominando a Linguagem de Programação JavaScript"}
        place={"DIO - Digital Inovation One"}
        id={"B67A3FE0"}
      />

      <Stack
        date={"▪ junho 2022"}
        title={"Módulo II - Fundamentos Web com HTML e CSS"}
        place={"DIO - Digital Inovation One"}
        id={"C926A682"}
      />

      <Stack
        date={"▪ março 2022"}
        title={"Javascript ES6 essencial"}
        place={"DIO - Digital Inovation One"}
        id={"890A1863"}
      />

      <Stack
        date={"▪ jan 2022"}
        title={"Programação para a internet com Javascript"}
        place={"DIO - Digital Inovation One"}
        id={"ACFBADF4"}
      />
    </ul>
  )
}


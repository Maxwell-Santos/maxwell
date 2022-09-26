import { GetStaticProps } from "next";
import { Header } from "../components/Header";
import { ProjectComponent } from "../components/ProjectComponent";
import { TitleSection } from "../components/TitleSection";

export default function Portfolio({repositories}:any) {

  return (
    <>
      <Header page="portfolio"/>

      <section
        className="mt-24"
      >
        <TitleSection title="portfólio" />

        <div
        className="w-full grid grid-cols-2 p-10 gap-2"
        >
          {
            repositories.filter((value: any) => {
              return value.name != "Maxwell-Santos"
            })
            .map((obj: any) => {
              return <ProjectComponent key={obj.id} data={obj}/>
            })
          }
          

        </div>

      </section>
    </>
  )
}


//escolhi esse método, ja que ele faz a requisição uma vez só e mantém a página em cache, não precisa ficar buscando no github, apenas quando eu revalidar
export const getStaticProps: GetStaticProps = async () => {

  const api = await fetch('https://api.github.com/users/Maxwell-Santos/repos')
  const response = await api.json()
  const repos = response.map((repo: any) => repo)

  /*
  Meu código que quero que seja revalidado a cada tempo escolhido 
  O 'revalidate', é um atributo que tem o valor em segundos de cada vez que a página terá conteúdos novos
  */
  return {
    props: {
      /*Aqui dentro posso retornar o dado que eu quiser*/
      repositories: repos,
    },
    revalidate: 10
  }
}

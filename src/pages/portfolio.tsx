import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from '../components/Head';

import { Header } from "../components/Headers";
import { ProjectComponent } from "../components/ProjectComponent";
import { TitleSection } from "../components/TitleSection";

import projectsPhotos from '../importAssets/importsProjectsPhotos';

import { FreeMode, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/free-mode";

//INTERFACE
import { ProjectProps } from '../interfaces/RepositoriesProps';
import { FadeCircle } from '../components/Circles';

interface RepositoriesPropsShow extends ProjectProps {
  img: any
}

class Portfolio {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  languages_url: any;
  img: any;

  constructor(
    id: number,
    name: string,
    html_url: string,
    languages_url: any,
    img: any,
    homepage?: string,

  ) {
    this.id = id;
    this.name = name;
    this.html_url = html_url;
    this.homepage = homepage;
    this.languages_url = languages_url;
    this.img = img;
  }
}

export default function Portfolios({ repositories }: any) {
  const [width, setWidth] = useState(0)

  //pegar a largura da tela do usuário
  useEffect(() => {
    setWidth(screen.width)
  }, [])

  const repositoriesParsed = JSON.parse(repositories)
  //Esse array é o que mostra na tela os projetos ja formatados 
  const finallyRepositories: RepositoriesPropsShow[] = [];

  /**
 * esse array serve para sincronizar as img estáticas com os repositórios pelo id;
 * Os ids desses objetos, batem com o id do projeto no repositório, e a img corresponde também;
 * A finalidade disso, é porque eu quero prints dos meus projetos.
 */
  const escopoRepositories = [
    {
      img: projectsPhotos.Idesign,
      id: 558094704
    },
    {
      img: projectsPhotos.Movies,
      id: 508747276
    },
    {
      img: projectsPhotos.LandPage,
      id: 485900216
    },
    {
      img: projectsPhotos.Turismo,
      id: 533521470
    },
    {
      img: projectsPhotos.CalcGorjeta,
      id: 482375390
    },
    {
      img: projectsPhotos.CardNFT,
      id: 481977497
    },
    {
      img: projectsPhotos.Insta,
      id: 534835307
    },
  ]

  //fazendo match de atributos para criar o objeto que será mostrado em tela
  escopoRepositories.map((escopo: any) => {
    repositoriesParsed.map((repository: ProjectProps) => {

      if (escopo.id == repository.id) {
        const newPortfolio = new Portfolio(repository.id, repository.name, repository.html_url, repository.languages_url, escopo.img, repository?.homepage)

        finallyRepositories.push(newPortfolio)
      }
    })
  })

  return (
    <>
      <Head />

      <section className="my-24 max-w-full px-3">
        <Header page="portfolio" />

        <div className="md:px-12 2xl:px-24 ">
          <TitleSection title="portfólio" />
        </div>

        <Swiper
          // className="overflow-visible flex items-center"
          modules={[Pagination, Mousewheel, FreeMode]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          centeredSlides
          mousewheel
          freeMode
          spaceBetween={width >= 770 ? 10 : 20}
          slidesPerView={width >= 770 ? 2 : 1}
        >
          {
            finallyRepositories.map((repository: any) => {
              return (
                <SwiperSlide
                  key={repository.id}
                  className='flex justify-center items-center aspect-square md:aspect-video'
                >
                  <ProjectComponent key={repository.id} data={repository} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </section>
      <FadeCircle />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const api = await fetch('https://api.github.com/users/Maxwell-Santos/repos')
  const response = await api.json()

  //filtrando o meu README pessoal, do github
  const repositoriesFiltered: ProjectProps[] = response.filter((repo: any) => repo.name != "Maxwell-Santos")

  //precisei fazer isso, porque estava dando erro para passar o array de objetos pelas props. Ai aqui transforma em string e quando é recuperado la na função, volta a ser JSON
  const props = JSON.stringify(repositoriesFiltered)

  return {
    props: {
      repositories: props,
    },
  }
}
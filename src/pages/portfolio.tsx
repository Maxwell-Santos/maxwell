import { GetServerSideProps } from 'next';

import Head from '../components/Head';

import { Header } from "../components/Header";
import { ProjectComponent } from "../components/ProjectComponent";
import { TitleSection } from "../components/TitleSection";

//INTERFACE
import { ProjectProps } from '../interfaces/RepositoriesProps';

import CalcGorjeta from '../../public/img/calcgorjetas.png';
import CardNFT from '../../public/img/cardnft.jpg';
import Insta from '../../public/img/insta.jpg';
import LandPage from '../../public/img/landpage.jpg';
import Movies from '../../public/img/movies.png';
import Turismo from '../../public/img/turismo.png';

import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';


interface RepositoriesPropsShow extends ProjectProps {
  img: any
}

export default function Portfolios({ repositories }: any) {

  const repositoriesParse = JSON.parse(repositories)

  return (
    <>
      <Head />

      <Header page="portfolio" />

      <section className="my-24">
        <TitleSection title="portfólio" />

        <Swiper
          className="overflow-visible flex items-center md:h-[65vh] "
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          centeredSlides
        >
          {
            repositoriesParse.map((repository: any) => {
              return (
                <SwiperSlide
                  className='flex justify-center items-center overflow-hidden aspect-video'
                  key={repository.id}
                >
                  <ProjectComponent key={repository.id} data={repository} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </section>
    </>
  )
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

export const getServerSideProps: GetServerSideProps = async () => {

  const api = await fetch('https://api.github.com/users/Maxwell-Santos/repos')
  const response = await api.json()

  //filtrando o meu README pessoal, do github
  const repositoriesFiltered: ProjectProps[] = response.filter((repo: any) => repo.name != "Maxwell-Santos")

  /**
   * O único fim desse array, é ajudar a sincronizar as img estáticas com os repositórios pelo id;
   * Os ids desses objetos, batem com o id do projeto no repositório, e a img corresponde também;
   * A finalidade disso, é porque eu quero prints dos meus projetos.
   */
  const escopoRepositories = [
    {
      img: LandPage,
      id: 485900216
    },
    {
      img: Movies,
      id: 508747276
    },
    {
      img: Turismo,
      id: 533521470
    },
    {
      img: CalcGorjeta,
      id: 482375390
    },
    {
      img: CardNFT,
      id: 481977497
    },
    {
      img: Insta,
      id: 534835307
    },
  ]

  //Esse array é o que mostra na tela os projetos ja formatados 
  const finallyRepositories: RepositoriesPropsShow[] = [];

  escopoRepositories.map((escopo: any) => {
    repositoriesFiltered.map((repository: ProjectProps) => {

      if (escopo.id == repository.id) {
        const newPortfolio = new Portfolio(repository.id, repository.name, repository.html_url, repository.languages_url, escopo.img, repository?.homepage)

          finallyRepositories.push(newPortfolio)
        }

    })
  })


  //precisei fazer isso, porque estava dando erro para passar o array de objetos pelas props. Ai aqui transforma em string e quando é recuperado la na função, volta a ser JSON
  const props = JSON.stringify(finallyRepositories)

  return {
    props: {
      repositories: props,
    }
  }
}
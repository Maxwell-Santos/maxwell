import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from '../components/Head';

import { Header } from "../components/Headers";
import { ProjectComponent } from "../components/ProjectComponent";
import { TitleSection } from "../components/TitleSection";

import projectsPhotos from '../importAssets/importsProjectsPhotos';

import { Fade, Modal } from '@mui/material';
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
  type: "mobile-first" | "web";

  constructor(
    id: number,
    name: string,
    html_url: string,
    languages_url: any,
    img: any,
    type: "mobile-first" | "web",
    homepage?: string,

  ) {
    this.id = id;
    this.name = name;
    this.html_url = html_url;
    this.homepage = homepage;
    this.languages_url = languages_url;
    this.img = img;
    this.type = type;
  }
}

export default function Portfolios({ repositories }: any) {
  const [width, setWidth] = useState(0)
  const [projectType, setProjectType] = useState<"web" | "mobile-first" | null>(null)

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
      img: projectsPhotos.Forca,
      id: 582687705,
      type: "mobile-first",
    },
    {
      img: projectsPhotos.VitrineGames,
      id: 580024318,
      type: "web",
    },
    {
      img: projectsPhotos.CardapioDigital,
      id: 562651891,
      type: "mobile-first",
    },
    {
      img: projectsPhotos.Idesign,
      id: 558094704,
      type: "web",
    },
    {
      img: projectsPhotos.Movies,
      id: 508747276,
      type: "web",

    },
    {
      img: projectsPhotos.LandPage,
      id: 485900216,
      type: "web",

    },
    {
      img: projectsPhotos.Turismo,
      id: 533521470,
      type: "web",

    },
    {
      img: projectsPhotos.CalcGorjeta,
      id: 482375390,
      type: "mobile-first",

    },
    {
      img: projectsPhotos.CardNFT,
      id: 481977497,
      type: "web",

    },
    {
      img: projectsPhotos.Insta,
      id: 534835307,
      type: "web",
    },
  ]

  //fazendo match de atributos para criar o objeto que será mostrado em tela
  escopoRepositories.map((escopo: any) => {
    repositoriesParsed.map((repository: ProjectProps) => {

      if (escopo.id == repository.id) {
        const newPortfolio = new Portfolio(repository.id, repository.name, repository.html_url, repository.languages_url, escopo.img, escopo.type, repository?.homepage)

        finallyRepositories.push(newPortfolio)
      }
    })
  })

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    //abrir e fechar modal
    setOpen(prev => prev = !prev)
  }

  return (
    <>
      <Head>Maxwell Alves dos Santos - Portfólio</Head>

      <section className="my-24 max-w-full px-3">
        <Header page="portfolio" />

        <div className="md:px-12 2xl:px-24 ">
          <TitleSection title="portfólio" />
        </div>

        <nav
          className="flex mb-5 sm:ml-8 gap-3"
        >
          <button
            className={`linkSection ${projectType == null && "bg-secondary/50"}`}
            title="projetos web"
            onClick={() => setProjectType(null)}
          >
            Todos
          </button>

          <button
            className={`linkSection ${projectType == 'web' && "bg-secondary/50"}`}
            title="projetos web"
            onClick={() => setProjectType("web")}
          >
            Web
          </button>

          <button
            className={`linkSection ${projectType == 'mobile-first' && "bg-secondary/50"}`}
            title="projetos mobile first"
            onClick={() => setProjectType("mobile-first")}
          >
            Mobile-first
          </button>

          <span
            className='bg-[#EEEEEE30] rounded-full px-2 flex items-center justify-center text-sm cursor-pointer'
            onClick={handleModal}
          >
            ?
          </span>

          <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="saiba mais"
            aria-describedby="mais informações sobre as seções de projetos"
          >
            <Fade in={open}>
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 p-4 bg-black/90 outline-none 
                w-[90%] sm:w-full max-w-md rounded-md'
              >
                <span>
                  Apesar dos projetos serem responsivos, decidi separar os que foram pensados primeiramente para dispositivos móveis. Enquanto não tenho projetos finalizados com React-Native.
                </span>
              </div>
            </Fade>
          </Modal>
        </nav>

        <Swiper
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
            projectType == "mobile-first" ? (
              finallyRepositories.map(repository => {
                if (repository.type == "mobile-first") {
                  return (
                    <SwiperSlide
                      key={repository.id}
                      className='flex justify-center items-center aspect-square md:aspect-video'
                    >
                      <ProjectComponent key={repository.id} data={repository} />
                    </SwiperSlide>
                  )
                }
              })
            )
              : projectType === "web" ?
                (
                  finallyRepositories.map(repository => {
                    if (repository.type == "web") {
                      return (
                        <SwiperSlide
                          key={repository.id}
                          className='flex justify-center items-center aspect-square md:aspect-video'
                        >
                          <ProjectComponent key={repository.id} data={repository} />
                        </SwiperSlide>
                      )
                    }
                  })
                )
                : projectType === null &&
                (
                  finallyRepositories.map(repository => {
                    return (
                      <SwiperSlide
                        key={repository.id}
                        className='flex justify-center items-center aspect-square md:aspect-video'
                      >
                        <ProjectComponent key={repository.id} data={repository} />
                      </SwiperSlide>
                    )

                  })
                )
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
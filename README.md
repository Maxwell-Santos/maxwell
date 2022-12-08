# MEU PORTFÓLIO

<img src="./public/video.gif" alt="apresentação do projeto">

## Mão no código
- [Tecnologias usadas](#tecnologias-usadas)
- [Processo de aprendizagem](#meu-processo-de-aprendizagem)
- [Github](#github)
  - [O que eu fiz](#o-que-eu-fiz)
  - [Objetivo](#objetivo)
- [Listagem de certificados](#como-listei-meus-certificados-usando-o-next)
- [Agradecimentos](#agradecimentos)


<p>Esse é meu primeiro portfólio, a ideia é facilitar a vida dos recrutadores, e também mostrar o que eu sei e venho estudando</p>

## Tecnologias usadas

- Next
- Typescript
- React
- React-hook-form
- React-scroll
- Tailwindcss 
- Swiper (lib para fazer o carrossel na exposição dos meus projetos)
- Material UI
- AOS (lib para animação dos componentes no scroll)
- AXIOS
- Nodemailer


## Meu Processo de aprendizagem

<p>
Bom, eu nunca tinha feito nada com Next antes, já programava algumas coisas com React, por exemplo, esse site de filmes que consome a API TMDB <a href="https://top-movies-week.vercel.app/">Best Movies</a>, ficou muito legal, foi uma experiência e tanto.
</p>

<p>Eu escolhi usas esse framework, afim de deixar minha aplicação mais rápida e performática, já que uma das características fortes do Next é justamente trazer o html pronto direto do servidor.</p>

## Github
<p>Usei a API do github para listar os meus projetos no site, mas tinha um porém,não havia imagens, ficaria só os nomes links dos projetos que ja fiz, e não ficaria legal...</p>

### O que eu fiz
<p>Cada repositório, tem junto um ID, e usando ele eu dei um jeitinho de colocar as prints dos meus repositórios</p>

- Após ter tirado as prints dos meus projetos, salvei aqui na pasta <code>public/img</code>;
- Na página <code>portfólio</code>, fiz meu trâmite...

</br>
<i>estou usando o <code>getStaticProps</code> do Next para fazer a requisição API no github, por ser mais performático e encaixar bem no que eu busco, já que não tem muitas mudanças no que será mostrado em tela sem minha interferência no código.</i>

### Objetivo
<p>O que precisava fazer era dar um jeito de juntar a imagem do projeto com o objeto do repositório correspondente que vem da API</p>

- Primeiro, criei um array de objetos, contendo cada um a print, id, e o "type" daquele projeto

obs: O type é uma feature nova que adicionei agora no dia 17/11/22, esse type auxilia na filtragem dos projetos... entre web, mobile-first e todos 
</br>

<i>Futuramente, quem sabe eu não adicione mais filtros...</i>

```tsx
  /**
 * esse array serve para sincronizar as img estáticas com os repositórios pelo id;
 * Os ids desses objetos, batem com o id do projeto no repositório, e a img corresponde também;
 * A finalidade disso, é porque eu quero imagens dos meus projetos.
 */
  const escopoRepositories = [
    {
      img: LandPage,
      id: 485900216
      type: "web"
    },
    {
      img: Movies,
      id: 508747276,
      type: "web"

    },
    //entre outros projetos
  ]
```

- Criei a classe que terá seu conteúdo a partir do match do objeto com print e ID, e o repositório com o mesmo ID. Essa verificação é feita no <code>src/pages/portfolio.tsx</code>

**O problema desse método, é que para cada novo projeto, tenho que adicionar um novo objeto com a print e o id desse repositório**

```tsx

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

//getServerSideProps, manda para o componente que será mostrado em tela, os dados da req API pelo parâmetro
export default function Portfolios({ repositories }: any) {

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
      img: LandPage,
      id: 485900216
      type: "web"
    },
    {
      img: Movies,
      id: 508747276,
      type: "web"

    },
    {
      img: Turismo,
      id: 533521470
      type: "web",
    },
    {
      img: CalcGorjeta,
      id: 482375390,
      type: "web"
    },
    {
      img: CardNFT,
      id: 481977497,
      type: "web"
    },
    {
      img: Insta,
      id: 534835307,
      type: "web"
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
}

  //Filtrando o repositório pessoal de README lá do Github
 const repositoriesFiltered: ProjectProps[] = response.filter((repo: any) => repo.name != "Maxwell-Santos")
```

## Como listei meus certificados usando o Next

Os certificados são simples, basicamente crie um componente que será reutilizado para cada certificado, recebendo seu conteúdo por meio de props.

Esse processo está em <code>src/components/Roadmap.tsx</code>

```tsx
//Componente do card em si
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
      md:px-4 md:py-6 transition-all
      ${primary ? "bg-[#0055ff98]" : "bg-cards hover:bg-[#0057ff66]"} `}
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
```

```tsx
//Todo o Roadmap

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

      {/*Mais certificados que seguem a mesma lógica*/}
  )
}
```
## Agradecimentos
<p>
  Esses foram alguns dos pontos que quis destacar, de como foi todo o processo de desenvolvimento desse meu portfólio. Foi uma experiência incrível, eu nunca tinha usado o Next, ele é muito rápido e fácil de usar.
</p>

<p>Ja vim de uma base sabendo como de como funciona a internet, estruturas lógicas, protocolos HTTP, design etc. do curso técnico que fiz integrado ao ensino médio na ETEC daqui.</p>

<p>Porém, Next, React, Tailwind, Styled-components, entre outras libs e frameworks, aprendi sozinho, vendo vídeos na internet e colocando em prática, sempre, sempre praticando. O conhecimento é a única coisa que ninguém pode tirar de alguém, por isso estude, e faça algo que te dê vontade de não parar mais, essa sensação é muito boa...</p>

<p>Também quero agradecer minha namorada que sempre esteve do meu lado, desde quando terminei o ensino médio até hoje, e isso já faz 84 anos, e ela sempre está do meu lado me ajudando e correndo atrás comigo ❤</p>

<p>Agradecer minha família que sempre me apoiaram também (mesmo não tendo ideia do que eu faço, o resultado eles sempre entendem)</p>

<p>E agradecer minha cunhada, por estar do meu lado me apoiando e ajudando a sempre melhorar como me apresentar no LinkedIn.</p>




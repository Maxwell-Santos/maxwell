# MEU PORTFÓLIO

<p>Esse é meu primeiro portfólio, a ideia é facilitar a vida dos recrutadores, e também mostrar o que eu sei, e estudo hoje em dia</p>

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


## Meu Processo de aprendizagem

<p>
Bom, eu nunca tinha feito nada com Next antes, já programava algumas coisas com React, por exemplo, esse site de filmes que consome a API TMDB [Best Movies](https://top-movies-week.vercel.app/), ficou muito legal, foi uma experiência e tanto.
</p>

<p>Eu escolhi usas esse framework, afim de deixar minha aplicação mais rápida e performática, já que uma das características fortes do Next é justamente ter um servidor node rodando no frontend, ele ajuda bastante a evitar gargalos.</p>

## Github
<p>No meu portfólio, também consumo a API do github. Usei para listar os meus projetos no site, mas tinha um porém,não havia imagens, ficaria só os nomes links dos projetos que ja fiz, e não ficaria legal...</p>

### O que eu fiz
<p>Cada repositório, tem junto um ID, e usando ele eu fei um jeitinho de colocar as prints dos meus repositórios</p>

Após ter tirado as prints dos meus projetos, salvei aqui na pasta <code>public/img</code>;
Na página <code>portfólio</code>, fiz meu tramite...

</br>
<i>Por enquanto, estou usando o <code>getServerSideProps</code> do Next para fazer a requisição API no github, mas futuramente pretendo alterar para <code>getStaticProps</code>, acredito ser mais performático e fazer mais sentido, já que o tanto de projeto não muda tanto.</i>

<p>Como eu queria imagens, não achei (ainda), uma forma de automatizar isso, mas enfim:</p>

### Objetivo
<p>O que precisava fazer era dar um jeito de juntar a imagem do projeto com o objeto do repositório correspondente que vem lá da API</p>

- Primeiro centralizei todas as importações das imagens, num único arquivo <code>src/components/S</code>

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




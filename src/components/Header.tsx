export function Header() {
  
  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm p-5 md:px-16 flex justify-between items-center border-b-2 border-b-header"
    >
      <div><h2>MINHA LOGO</h2></div>
      <nav
        className="text-[16px] flex gap-3 md:gap-5 items-center"
      >
        <a href="#Sobre">
          Sobre
        </a>
        <a 
        href="#Contato"
        className="border border-btn-secondary rounded-md p-1 px-2"
        >
          Contato
        </a>
        
        <a 
        href=""
        className="bg-secondary p-1 px-2 text-btn uppercase font-robotoCondensed rounded-md flex items-center font-medium tracking-wider transition-colors hover:bg-hover-btn"
        >
          Portfólio
        </a>
        <a href="">

        </a>
      </nav>
    </header>
  )
}

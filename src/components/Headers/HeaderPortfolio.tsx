import Link from "next/link";

export function HeaderPortfolio() {

  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm p-3 md:px-16 flex justify-between items-center border-b-2 border-b-header"
    >
      <Link
        href="/"
      >
        <h2
          className="cursor-pointer"
        >
          MINHA LOGO</h2>
      </Link>

    </header>
  )
}

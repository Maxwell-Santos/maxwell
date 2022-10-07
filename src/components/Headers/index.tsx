import { HeaderIntro } from "./HeaderIntro";
import { HeaderPortfolio } from "./HeaderPortfolio";

interface HeaderProps {
  page?: string;
}

export function Header({ page }: HeaderProps) {
  return (
    <>
      {page == "portfolio" ?
        (
          <HeaderPortfolio />
          ) : (
          <HeaderIntro />
        )}
    </>
  )
}



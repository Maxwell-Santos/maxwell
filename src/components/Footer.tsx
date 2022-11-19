import Link from "next/link";

export function Footer() {

  return (
    <footer>
      <Link
        href="/portfolio"
        >
        <a
        className="px-3 py-1 rounded-sm bg-secondary text-default cursor-pointer"
        >

        Portfólio
        </a>
      </Link>

      <div>
        <span
          className="text-sm"
        >Feito por:</span>
        <h1>Maxwell Alves dos Santos</h1>
      </div>

      <div>
        <span
          className="text-sm block"
        >WhatsApp: (11) 97776-1749</span>
        <span
          className="text-sm block mt-2"
        >Instagram: @this.maxwell</span>
      </div>

    </footer>
  )
}

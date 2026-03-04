import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Moto Peças Binho
        </Link>
        <nav className="flex items-center gap-4 text-xs font-medium text-zinc-700">
          <Link href="/produtos" className="hover:text-zinc-900">
            Produtos
          </Link>
          <Link href="/orcamento" className="hover:text-zinc-900">
            Orçamento
          </Link>
          <Link href="/carrinho" className="hover:text-zinc-900">
            Carrinho
          </Link>
        </nav>
      </div>
    </header>
  );
}


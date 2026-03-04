import Link from "next/link";

export function AdminTopBar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/admin" className="text-sm font-semibold tracking-tight">
          Painel administrativo
        </Link>
        <nav className="flex items-center gap-3 text-xs font-medium text-zinc-600">
          <Link href="/admin/produtos" className="hover:text-zinc-900">
            Produtos
          </Link>
          <Link href="/admin/pedidos" className="hover:text-zinc-900">
            Pedidos
          </Link>
          <Link href="/admin/orcamentos" className="hover:text-zinc-900">
            Orçamentos
          </Link>
        </nav>
      </div>
    </header>
  );
}


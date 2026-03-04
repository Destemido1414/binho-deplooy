import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";

export const runtime = "nodejs";

export default async function AdminHomePage() {
  await requireAdmin();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Painel administrativo</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Acesse os cadastros de produtos, pedidos e orçamentos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/admin/produtos"
          className="rounded-2xl border bg-white p-4 text-sm hover:bg-zinc-50"
        >
          <div className="font-semibold">Produtos</div>
          <div className="mt-1 text-zinc-600">
            Cadastre novas peças e gerencie estoque.
          </div>
        </Link>
        <Link
          href="/admin/pedidos"
          className="rounded-2xl border bg-white p-4 text-sm hover:bg-zinc-50"
        >
          <div className="font-semibold">Pedidos</div>
          <div className="mt-1 text-zinc-600">
            Acompanhe pagamentos e status das vendas.
          </div>
        </Link>
        <Link
          href="/admin/orcamentos"
          className="rounded-2xl border bg-white p-4 text-sm hover:bg-zinc-50"
        >
          <div className="font-semibold">Orçamentos</div>
          <div className="mt-1 text-zinc-600">
            Veja as solicitações de orçamento enviadas pelo site.
          </div>
        </Link>
      </div>
    </div>
  );
}


import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatBRLFromCents } from "@/lib/format";

export const runtime = "nodejs";

export default async function AdminProductsPage() {

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Produtos
          </h1>

          <p className="mt-1 text-sm text-zinc-600">
            Cadastre, edite e controle estoque.
          </p>
        </div>

        <Link
          href="/admin/produtos/novo"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Novo produto
        </Link>

      </div>

      <div className="overflow-hidden rounded-2xl border bg-white">

        <div className="grid grid-cols-12 gap-3 border-b bg-zinc-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-600">
          <div className="col-span-7">Produto</div>
          <div className="col-span-3">Preço</div>
          <div className="col-span-2">Estoque</div>
        </div>

        <div className="divide-y">

          {products.map((p: any) => (

            <Link
              key={p.id}
              href={`/admin/produtos/${p.id}`}
              className="grid grid-cols-12 gap-3 px-4 py-3 text-sm hover:bg-zinc-50"
            >

              <div className="col-span-7 font-medium text-zinc-900">
                {p.name}

                <div className="mt-0.5 text-xs text-zinc-500">
                  {p.slug}
                </div>
              </div>

              <div className="col-span-3">
                {formatBRLFromCents(p.priceCents)}
              </div>

              <div className="col-span-2">
                {p.stock}
              </div>

            </Link>

          ))}

          {products.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-zinc-600">
              Nenhum produto cadastrado ainda.
            </div>
          ) : null}

        </div>

      </div>

    </div>
  );
}
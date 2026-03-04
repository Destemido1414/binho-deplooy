product.imageUrlimport { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function AdminProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) return notFound();

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Editar Produto</h1>
        <p className="text-sm text-zinc-500">Atualize as informações do produto.</p>
      </div>

      <form className="space-y-4 border rounded-xl p-6 bg-white">

        <div className="space-y-1">
          <label className="text-sm font-medium">Nome</label>
          <input
            name="name"
            defaultValue={product.name}
            className="h-11 w-full rounded-xl border px-3 outline-none focus:border-zinc-900"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Slug</label>
          <input
            name="slug"
            defaultValue={product.slug}
            className="h-11 w-full rounded-xl border px-3 outline-none focus:border-zinc-900"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Descrição</label>
          <textarea
            name="description"
            defaultValue={product.description ?? ""}
            className="w-full rounded-xl border px-3 py-2 outline-none focus:border-zinc-900"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Preço (centavos)</label>
          <input
            name="priceCents"
            type="number"
            defaultValue={product.priceCents}
            className="h-11 w-full rounded-xl border px-3 outline-none focus:border-zinc-900"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Imagem URL</label>
          <input
            name="imageUrl"
            defaultValue={product.image ?? ""}
            className="h-11 w-full rounded-xl border px-3 outline-none focus:border-zinc-900"
            placeholder="https://..."
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Estoque</label>
          <input
            name="stock"
            type="number"
            defaultValue={product.stock}
            className="h-11 w-full rounded-xl border px-3 outline-none focus:border-zinc-900"
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-xl bg-black text-white hover:bg-zinc-800"
        >
          Salvar produto
        </button>
      </form>
    </div>
  );
}
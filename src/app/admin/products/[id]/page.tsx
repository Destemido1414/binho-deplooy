import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function AdminProductPage({ params }: PageProps) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold">Editar Produto</h1>

      <form className="space-y-4 border rounded-xl p-6 bg-white">

        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            name="name"
            defaultValue={product.name}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            name="slug"
            defaultValue={product.slug}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            name="description"
            defaultValue={product.description ?? ""}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preço (centavos)</label>
          <input
            name="priceCents"
            type="number"
            defaultValue={product.priceCents}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Imagem</label>
          <input
            name="image"
            defaultValue={product.image || ""}
            className="w-full border rounded p-2"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Estoque</label>
          <input
            name="stock"
            type="number"
            defaultValue={product.stock}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Salvar Produto
        </button>

      </form>
    </div>
  );
}
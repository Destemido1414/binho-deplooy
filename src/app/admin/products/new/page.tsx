import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function NewProductPage() {

  async function createProduct(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const priceCents = Number(formData.get("priceCents") || 0);
    const image = formData.get("image") as string;
    const stock = Number(formData.get("stock") || 0);

    await prisma.product.create({
      data: {
        name,
        slug,
        description: description || null,
        priceCents,
        image: image || null,
        stock,
      },
    });

    redirect("/admin/produtos");
  }

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold">Novo Produto</h1>

      <form action={createProduct} className="space-y-4 border rounded-xl p-6 bg-white">

        <div>
          <label>Nome</label>
          <input name="name" className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Slug</label>
          <input name="slug" className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Descrição</label>
          <textarea name="description" className="w-full border rounded p-2" />
        </div>

        <div>
          <label>Preço (centavos)</label>
          <input name="priceCents" type="number" className="w-full border rounded p-2" required />
        </div>

        <div>
          <label>Imagem</label>
          <input name="image" className="w-full border rounded p-2" placeholder="https://..." />
        </div>

        <div>
          <label>Estoque</label>
          <input name="stock" type="number" className="w-full border rounded p-2" />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Criar Produto
        </button>

      </form>
    </div>
  );
}
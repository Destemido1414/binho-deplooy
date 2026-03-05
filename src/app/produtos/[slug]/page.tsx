import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-white">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-500">
              Sem imagem
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {product.description && (
            <p className="text-zinc-600">{product.description}</p>
          )}

          <div className="text-2xl font-semibold">
            R$ {(product.priceCents / 100).toFixed(2)}
          </div>

          <div className="text-sm text-zinc-500">
            Estoque: {product.stock}
          </div>

          <button className="mt-4 rounded-xl bg-black px-6 py-3 text-white hover:opacity-90">
            Comprar
          </button>
        </div>

      </div>
    </main>
  );
}
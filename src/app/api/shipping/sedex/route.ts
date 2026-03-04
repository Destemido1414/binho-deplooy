import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  destinationCep: z.string().min(8).max(9),
  totalWeightKg: z.number().positive(),
});

const ORIGIN_CEP = "11250-426";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const { totalWeightKg } = parsed.data;

  // Cálculo interno simples de frete baseado no peso.
  // Mantém CEP de origem/destino para futura melhoria com Correios oficiais.
  const baseCents = 2500; // R$ 25,00 base
  const perKgCents = 700; // R$ 7,00 por kg
  const extraDistanceCents = 0; // ponto para ajustar por faixa de CEP se quiser

  const shippingCents =
    baseCents + Math.round(totalWeightKg * perKgCents) + extraDistanceCents;

  return NextResponse.json({
    ok: true,
    service: "SEDEX (estimado)",
    shippingCents,
    prazoEntregaDias: 3,
    originCep: ORIGIN_CEP,
    destinationCep: parsed.data.destinationCep,
  });
}


import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/requireAdmin";

export async function updateQuoteStatusAction(id: string, status: string) {
  await requireAdmin();
  await prisma.quoteRequest.update({
    where: { id },
    data: { status }
  });
}
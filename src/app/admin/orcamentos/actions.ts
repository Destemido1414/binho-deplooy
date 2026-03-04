export async function updateQuoteStatusAction(id: string, status: string) {
  await requireAdmin();
  return true;
}
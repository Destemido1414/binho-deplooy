import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const form = await req.formData();

  const email = form.get("email");
  const password = form.get("password");

  if (email === "admin@admin.com" && password === "123456") {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "Credenciais inválidas" },
    { status: 401 }
  );
}
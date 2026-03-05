import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const email = body.email;
  const password = body.password;

  // LOGIN SIMPLES (SEM BANCO)

  if (email === "admin@admin.com" && password === "123456") {

    return NextResponse.json({
      success: true
    });

  }

  return NextResponse.json(
    { error: "Credenciais inválidas" },
    { status: 401 }
  );

}
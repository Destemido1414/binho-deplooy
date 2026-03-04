import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Lista de produtos"
  });
}

export async function POST() {
  return NextResponse.json({
    message: "Produto criado"
  });
}

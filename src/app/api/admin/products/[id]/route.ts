import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API products funcionando"
  });
}

export async function POST() {
  return NextResponse.json({
    message: "Produto criado"
  });
}
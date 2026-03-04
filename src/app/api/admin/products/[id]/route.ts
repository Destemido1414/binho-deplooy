import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API de produtos funcionando"
  })
}

export async function POST() {
  return NextResponse.json({
    status: "ok",
    message: "Produto criado"
  })
}
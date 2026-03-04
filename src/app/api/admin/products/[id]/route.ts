import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "API funcionando"
  })
}

export async function DELETE() {
  return NextResponse.json({
    message: "Produto removido"
  })
}
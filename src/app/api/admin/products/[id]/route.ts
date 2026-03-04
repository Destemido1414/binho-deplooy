import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "products api ok"
  });
}

export async function POST() {
  return NextResponse.json({
    message: "product created"
  });
}
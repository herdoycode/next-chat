import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const { userId, friendId } = await request.json();
  const chat = await prisma.chat.create({
    data: {
      members: [userId, friendId],
    },
  });
  return NextResponse.json(chat);
}

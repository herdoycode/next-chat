import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  const chats = await prisma.chat.findMany({
    where: {
      members: {
        has: params.id,
      },
    },
  });
  return NextResponse.json(chats);
}

import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";

interface User {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { error } = validate(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { name, email, password } = body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (user)
    return NextResponse.json({ error: "User already exist." }, { status: 403 });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(
    { name: newUser.name, email: newUser.email },
    { status: 201 }
  );
}

const validate = (user: User) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(user);
};

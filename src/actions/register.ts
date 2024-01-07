"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);



  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email,password,name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password,10);
  const existingUser = await db.user.findUnique({
    where:{
        email
    }
  })

  if(existingUser) {
    return {
        error:"Email is already in use"
    }
  }

  await db.user.create({
    data:{
        name,
        email,
        password:hashedPassword
    }
  })


  return {
    success:"User created"
  };
}

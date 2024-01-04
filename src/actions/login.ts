"use server"
import { LoginSchema } from '@/schemas';
import * as z from 'zod'

export default async function login(values:z.infer<typeof LoginSchema>) {
    const validatedFields = LoginSchema.safeParse(values)

    if(!validatedFields.success) {
        return {
            error:"Invalid fields!"
        }
    }
}
'use server';

import { NewPasswordSchema } from "@/schemas";
import { z } from "zod";

export const newPassword = async(values:z.infer<typeof NewPasswordSchema >,token?:string|null) => {
    if(!token) {
        return {
            error:"Missing token!"
        }
    }
}
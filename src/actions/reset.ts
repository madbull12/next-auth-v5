import { getUserByEmail } from "@/data/users";
import { ResetSchema } from "@/schemas"
import { z } from "zod"

export const reset = async(values:z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);
    if(!validatedFields.success) {
        return {
            error:"Invalid fields"
        }
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);
    if(!existingUser) {
        return {
            error:"User not found"
        }
    }

    return {
        success:"Email sent"
    }
}
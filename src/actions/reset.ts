import { generatePasswordResetToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/users";
import { sendResetPasswordEmail, sendVerificationEmail } from "@/lib/mail";
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
    if(!existingUser || !existingUser.password) {
        return {
            error:"User not found"
        }
    }
    const resetToken = await generatePasswordResetToken(email);
    await sendResetPasswordEmail(resetToken.email, resetToken.token);
    return {
        success:"Email sent"
    }
}
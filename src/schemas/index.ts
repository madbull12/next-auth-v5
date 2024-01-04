import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password should contain at least 8 characters")
    .regex(new RegExp(".*[A-Z].*"), "Password should contain at least 1 uppercase character")
    .regex(new RegExp(".*\\d.*"), "Password should contain at least 1 digit")
});

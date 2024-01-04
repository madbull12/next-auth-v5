import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string().min(1,"Password is required")
});

export const RegisterSchema = z.object({
  name:z.string().min(1,"Name is required!"),
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z
    .string()
    .min(8, "Password should contain at least 8 characters")
    .regex(
      new RegExp(".*[A-Z].*"),
      "Password should contain at least 1 uppercase character"
    )
    .regex(new RegExp(".*\\d.*"), "Password should contain at least 1 digit"),
});

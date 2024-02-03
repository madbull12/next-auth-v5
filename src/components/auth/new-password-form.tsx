"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewPasswordSchema, ResetSchema } from "@/schemas";
import * as z from "zod";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";


const NewPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values).then((data) => {
        setError(data?.error as string);
        setSuccess(data?.success as string);
      });
    });
  }
  return (
    <div className="min-w-96">
      <CardWrapper desc="Enter a new password">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isPending} type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default NewPasswordForm;

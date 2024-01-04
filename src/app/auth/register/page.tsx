"use client"

import RegisterForm from "@/components/auth/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen flex-col gap-y-4 items-center justify-center primary-gradient">
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;

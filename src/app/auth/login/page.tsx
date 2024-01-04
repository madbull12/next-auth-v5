import CardWrapper from "@/components/auth/card-wrapper";
import LoginButton from "@/components/auth/login-button";
import LoginForm from "@/components/auth/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex h-full flex-col gap-y-4 items-center justify-center primary-gradient">
      <LoginForm />
    </main>
  );
};

export default LoginPage;

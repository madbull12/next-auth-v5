import NewVerificationForm from "@/components/auth/new-verification-form";
import React from "react";

const NewVerificationPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col gap-y-4 items-center justify-center primary-gradient">
      <NewVerificationForm />
    </main>
  );
};

export default NewVerificationPage;

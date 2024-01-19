import ResetForm from "@/components/auth/reset-form";
import React from "react";

const ResetPage = () => {
  return (
    <main className="flex h-full min-h-screen flex-col gap-y-4 items-center justify-center primary-gradient">
      <ResetForm />
    </main>
  );
};

export default ResetPage;

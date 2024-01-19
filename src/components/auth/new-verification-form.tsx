"use client";

import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import AlertError from "@/components/ui/alert-error";
import AlertSuccess from "../ui/alert-success";
const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const onSubmit = useCallback(async () => {
    if(success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }

    try {
      const data = await newVerification(token);
      setError(data.error);
      setSuccess(data.success);
    } catch (error) {
      setError("Something went wrong");
    }

    // newVerification(token).then((data)=>{
    //   setError(data.error);
    //   setSuccess(data.success)
    // }).catch(()=>{
    //   setError("Something went wrong")
    // })
  }, [token,success,error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="min-w-96">
      <CardWrapper desc="Confirming your verification" href="/auth/login">
        <div className="flex items-center justify-center">
          {!success && !error && <BeatLoader />}

          <AlertSuccess message={success as string} />
          <AlertError message={error as string} />
        </div>
      </CardWrapper>
    </div>
  );
};

export default NewVerificationForm;

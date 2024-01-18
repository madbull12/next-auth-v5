"use client";

import React, { useCallback, useEffect } from "react";
import CardWrapper from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(()=>{
    console.log(token)
  },[token])

  useEffect(()=>{
    onSubmit()
  },[onSubmit])

  return (
    <div className="min-w-96">
      <CardWrapper desc="Confirming your verification" href="/auth/login">
        <div className="flex items-center justify-center">
          <BeatLoader />
        </div>
      </CardWrapper>
    </div>
  );
};

export default NewVerificationForm;

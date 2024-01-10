"use client";

import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const Social = () => {
  const login = (provider:"google"|"github") => {
    signIn(provider,{
      callbackUrl:DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="flex items-center gap-x-4 w-full">
      <Button type="button" variant={"outline"} className="flex-1" onClick={()=>login("google")}>
        <FcGoogle />
      </Button>
      <Button type="button" variant={"outline"} className="flex-1" onClick={()=>login("github")}>
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;

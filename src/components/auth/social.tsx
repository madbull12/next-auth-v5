"use client";

import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Social = () => {
  return (
    <div className="flex items-center gap-x-4 w-full">
      <Button variant={"outline"} className="flex-1">
        <FcGoogle />
      </Button>
      <Button variant={"outline"} className="flex-1">
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;

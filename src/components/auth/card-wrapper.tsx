import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Social from "./social";
import Link from "next/link";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-full  gap-y-2">
      <CardHeader>
        <CardTitle className="text-center">Auth</CardTitle>
        <CardDescription className="text-center">Welcome back</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full flex flex-col">
        <Social />
        <Link href="/auth/register" className="text-sm mt-4 underline">
          Don't have an account yet?
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

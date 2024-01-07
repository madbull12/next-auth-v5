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

interface Props {
  children:React.ReactNode;
  desc:string;
  href:string;
  type:"register" | "login"
}
const CardWrapper = ({ children,desc,href,type }: Props) => {
  return (
    <Card className="w-full  gap-y-2">
      <CardHeader>
        <CardTitle className="text-center">Auth</CardTitle>
        <CardDescription className="text-center">{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full flex flex-col">
        <Social />
        <Link href={href} className="text-sm mt-4 underline">
          {type==="login" ? "Don't have an account yet?" : "Already have an account?"}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

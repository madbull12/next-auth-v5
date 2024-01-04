import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Social from "./social";

const CardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Card className="min-w-96 flex flex-col items-center gap-y-2">
      <CardHeader>
        <CardTitle className="text-center">Auth</CardTitle>
        <CardDescription className="text-center">Welcome back</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="w-full">
        <Social />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

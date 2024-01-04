import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from "lucide-react";
const AlertSuccess = ({ message }: { message: string }) => {
  if (!message || message==="") return null;

  return (
    <Alert variant={"default"} className="border-green-500 text-green-500">
      <Check />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;

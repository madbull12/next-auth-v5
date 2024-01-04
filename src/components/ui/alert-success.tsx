import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Check } from "lucide-react";
const AlertSuccess = ({message}:{message:string}) => {
  return (
    <Alert variant={'default'} className="border-green-500 text-green-500">
      <Check />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertSuccess;

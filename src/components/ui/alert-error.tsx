import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
const AlertError = ({message}:{message:string}) => {
  return (
    <Alert variant="destructive">
      <AlertTriangle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertError;

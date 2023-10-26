"use client";

import { useContext } from "react";
import ReactQRCode from "react-qr-code";
import { Card, CardContent } from "@/components/ui/card";
import { QrContext } from "./wrapper";

export function QrCode() {
  const { qrValue } = useContext(QrContext);

  return (
    <Card className="flex items-center justify-center">
      <CardContent className="bg-white p-4">
        <ReactQRCode value={qrValue} />
      </CardContent>
    </Card>
  );
}

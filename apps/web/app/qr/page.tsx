"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QRCode from "react-qr-code";

import { QRUrl } from "./url";

export type FunctionProps = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const tabs = [
  {
    id: "url",
    label: "URL",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
  {
    id: "v-card",
    label: "V Card",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
  {
    id: "text",
    label: "Text",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
  {
    id: "e-mail",
    label: "E-Mail",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
  {
    id: "sms",
    label: "Sms",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
  {
    id: "wifi",
    label: "Wifi",
    component: (props: FunctionProps) => <QRUrl {...props} />,
  },
];

export default function QRPage() {
  const [qrValue, setQrValue] = useState("");

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container grid grid-cols-4 gap-2">
        <Card className="col-span-3">
          <Tabs defaultValue={tabs[0].id}>
            <TabsList className="h-full w-full rounded-b-none grid grid-cols-3">
              {tabs.map((d) => (
                <TabsTrigger key={d.id} value={d.id}>
                  {d.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <CardContent>
              {tabs.map((d) => (
                <TabsContent value={d.id}>
                  {d.component({ setQrValue }) || d.label}
                </TabsContent>
              ))}
            </CardContent>
          </Tabs>
        </Card>
        <Card className="flex items-center justify-center">
          <CardContent className="bg-white p-4">
            <QRCode value={qrValue} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

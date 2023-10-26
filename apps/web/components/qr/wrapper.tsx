"use client";

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode } from "./qr-code";

export type WrapperProps = {
  tabs: {
    id: string;
    label: string;
    component: JSX.Element;
  }[];
};

export type QrContextType = {
  qrValue: string;
  setQrValue: Dispatch<SetStateAction<string>>;
};

export const QrContext = createContext<QrContextType>({
  qrValue: "",
  setQrValue: () => {},
});

export function QrProvider({ children }: { children: React.ReactNode }) {
  const [qrValue, setQrValue] = useState("");
  return (
    <QrContext.Provider value={{ qrValue, setQrValue }}>
      {children}
    </QrContext.Provider>
  );
}

export function Wrapper({ tabs }: WrapperProps) {
  const router = useRouter();
  const [tabValue, setTabValue] = useState("");

  useEffect(() => {
    const value = window.location.hash
      ? window.location.hash.replace("#", "")
      : tabs[0].id;
    setTabValue(value);
  }, []);

  function changeTab(id: string) {
    router.push(`#${id}`);
    setTabValue(id);
  }

  return (
    <QrProvider>
      <Card className="col-span-3">
        <Tabs onValueChange={changeTab} value={tabValue}>
          <TabsList className="h-full w-full rounded-b-none grid grid-cols-3">
            {tabs.map((d) => (
              <TabsTrigger key={d.id} value={d.id}>
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <CardContent>
            {tabs.map((d) => (
              <TabsContent key={d.id} value={d.id}>
                {d.component}
              </TabsContent>
            ))}
          </CardContent>
        </Tabs>
      </Card>
      <QrCode />
    </QrProvider>
  );
}

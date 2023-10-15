import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { QRUrl } from "./url";

const tabs = [
  { id: "url", label: "URL", component: <QRUrl /> },
  { id: "v-card", label: "V Card" },
  { id: "text", label: "Text" },
  { id: "e-mail", label: "E-Mail" },
  { id: "sms", label: "Sms" },
  { id: "wifi", label: "Wifi" },
];

export default function QRPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container">
        <Card>
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
                <TabsContent value={d.id}>{d.component || d.label}</TabsContent>
              ))}
            </CardContent>
          </Tabs>
          <CardFooter className="flex justify-end">
            <Button>Generate</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

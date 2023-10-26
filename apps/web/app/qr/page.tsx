import { Wrapper } from "@/components/qr/wrapper";
import { Url } from "@/components/qr/url";
import { VCard } from "@/components/qr/v-card";
import { Email } from "@/components/qr/e-mail";
import { Text } from "@/components/qr/text";
import { Sms } from "@/components/qr/sms";
import { Wifi } from "@/components/qr/wifi";

const tabs = [
  { id: "text", label: "Text", component: <Text /> },
  { id: "url", label: "URL", component: <Url /> },
  { id: "e-mail", label: "E-Mail", component: <Email /> },
  { id: "sms", label: "Sms", component: <Sms /> },
  { id: "v-card", label: "V Card", component: <VCard /> },
  { id: "wifi", label: "Wifi", component: <Wifi /> },
];

export default function QRPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container grid grid-cols-4 gap-2 ">
        <Wrapper tabs={tabs} />
      </div>
    </section>
  );
}

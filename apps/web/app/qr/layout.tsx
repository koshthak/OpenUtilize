import { LayoutProps } from "@/types";
import { headers } from "next/headers";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

const navItems = [
  {
    title: "Url",
    href: "/qr#url",
  },
  {
    title: "Vcard",
    href: "/qr#v-card",
  },
];

export default function QRLayout({ children }: LayoutProps) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const activeUrl = headersList.get("referer");
  const activeHost = headersList.get("host");
  console.log(headersList);
  console.log('activePath', activePath);
  console.log('activeUrl', activeUrl);
  console.log('activeHost', activeHost);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={navItems} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

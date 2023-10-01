import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenUtilize",
  description:
    "OpenUtilize is an online utility website that provides a suite of browser-based tools to simplify common tasks such as PDF manipulation, file compression, image editing, and more, without the need for users to install additional software.",
  keywords: ["PDF Tools", "Image Editing"],
};

interface ChildrenProp {
  children: React.ReactNode;
}

export default function RootLayout(props: ChildrenProp) {
  return (
    <html lang="en">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}

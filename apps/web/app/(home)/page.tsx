import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";

const features = [
  {
    heading: "PDF Tools",
    description: "PDF merging and splitting",
    path: "/pdf",
  },
  {
    heading: "Image Editing",
    description: "Image resizing and cropping",
    path: "/image",
  },
  {
    heading: "Qr",
    description: "generate QR",
    path: "/qr",
  },
  {
    heading: "Dev tools",
    description: "uuid, qr",
    path: "/dev",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col gap-4 text-center">
          <div className="md:grid  md:grid-cols-3 md:gap-2 items-center">
            <div className="md:order-last mb-6 md:mb-0">
              <Image
                src="/logo.png"
                className="dark:invert-[80%]"
                height={400}
                width={400}
                alt="logo"
              />
            </div>
            <div className="col-span-2">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Where Utility Meets Convenience.
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Your All-in-One Online Toolbox for Streamlined Tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            OpenUtilize is an online utility website that provides a suite of
            browser-based tools to simplify common tasks.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((d, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{d.heading}</h3>
                  <p className="text-sm text-muted-foreground">
                    {d.description}
                  </p>
                  <a
                    href={d.path}
                    className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="w-full">
                      Navigate
                    </span>
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            OpenUtilize is open source and powered by open source software.
            <br /> The code is available on
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

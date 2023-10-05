import { DropZone } from "@/components/ui/drop-zone";
import { edenTreaty } from "@elysiajs/eden";
import App from "next/app";

const app = edenTreaty<App>("http://localhost:8080");

export default function Pdf() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container">
        PDF
        <DropZone />
      </div>
    </section>
  );
}

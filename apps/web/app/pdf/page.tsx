// import { DropZone } from "@/components/ui/drop-zone";
import { Upload } from "./upload";

export default function Pdf() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container">
        PDF
        <Upload />
      </div>
    </section>
  );
}

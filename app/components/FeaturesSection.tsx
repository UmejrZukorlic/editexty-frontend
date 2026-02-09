import { FileSearch, PenLine, Download } from "lucide-react";

const features = [
  {
    title: "OCR PDF",
    description:
      "Convert scanned PDFs into searchable and editable text with high accuracy.",
    icon: FileSearch,
  },
  {
    title: "Edit PDF",
    description:
      "Directly modify text, images, and layout within your PDF documents.",
    icon: PenLine,
  },
  {
    title: "Download & Save",
    description:
      "Securely save your edited documents or export them to multiple formats.",
    icon: Download,
  },
];

const FeaturesSection = () => {
  return (
    <section className="container py-24 bg-secondary-foreground px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything you need to handle PDFs
          </h2>
          <p className="text-lg text-slate-500 italic">
            Powerful features that make document management a breeze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-primary-foreground border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

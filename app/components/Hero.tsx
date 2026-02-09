import Image from "next/image";
import { MousePointer2, CheckCircle2, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-40 pb-16 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
          <MousePointer2 className="w-3 h-3 text-secondary fill-secondary" />
          <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
            Next-gen PDF Editing
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-normal mb-6">
          Edit and extract text from{" "}
          <span className="text-blue-600">PDFs easily</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-10">
          Editexty provides professional-grade OCR and editing tools in a
          simple, fast interface. Transform your documents in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200 group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 rounded-lg font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all">
            View Demo
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -right-4 md:right-0 z-20 bg-white/80 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-xl flex items-center gap-3">
            <div className="bg-emerald-100 p-1.5 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 leading-none">
                OCR Status
              </p>
              <p className="text-sm font-bold text-slate-800">100% Accurate</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 shadow-2xl overflow-hidden bg-white p-2">
            <div className="rounded-xl overflow-hidden relative aspect-16/10">
              <Image
                src="/hero-photo.png"
                alt="Workspace with laptop and resume"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Target, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  const values = [
    {
      title: "Our Mission",
      description:
        "To simplify document management by making professional OCR and editing tools accessible to everyone.",
      icon: Target,
    },
    {
      title: "Privacy First",
      description:
        "Your security is our priority. We ensure that your documents never leave our secure processing environment.",
      icon: ShieldCheck,
    },
    {
      title: "User Centric",
      description:
        "We build features based on real user feedback to solve actual problems in the daily workflow.",
      icon: Heart,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="pt-40 pb-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              We&apos;re on a mission to <br />
              <span className="text-blue-600">tame PDF chaos</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Editexty was born out of frustration. We spent years struggling
              with complex, expensive PDF software until we decided to build
              something better, faster, and simpler.
            </p>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl bg-slate-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-transparent flex items-center justify-center text-slate-400">
                [Photo Placeholder - We will add real photo soon]
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2026, Editexty started as a small internal tool for
                  a legal firm that needed a better way to handle scanned
                  documents.
                </p>
                <p>
                  We realized that the market lacked a tool that was both
                  powerful enough for professionals and intuitive enough for
                  students. Today, we want to serve over 50,000 users worldwide,
                  from small startups to Fortune 500 companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What we stand for</h2>
              <p className="text-slate-400">
                The core principles that guide our development every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <v.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 text-center border-t border-slate-100">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Have a specific feature in mind?
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Editexty is built on user feedback. If you need a specific tool or
              have a suggestion, I&apos;d love to hear from you directly.
            </p>
            <a
              href="mailto:zukorlicumejr@gmail.com"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
              Contact Founder
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

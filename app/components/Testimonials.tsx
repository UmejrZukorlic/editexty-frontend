import { Star } from "lucide-react";

const StatsAndTestimonials = () => {
  const stats = [
    { label: "Files Processed", value: "10M+" },
    { label: "Accuracy Rate", value: "99.9%" },
    { label: "Active Users", value: "50k+" },
    { label: "Expert Support", value: "24/7" },
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Legal Assistant",
      initials: "SJ",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      content:
        '"Editexty has completely transformed our document workflow. The OCR is incredibly accurate."',
    },
    {
      name: "Marcus Chen",
      role: "Software Engineer",
      initials: "MC",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      content:
        '"The best tool I\'ve used for extracting text from technical documentation. Fast and reliable."',
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      initials: "ER",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      content:
        '"Simple, intuitive, and powerful. I can edit my scripts on the fly without any hassle."',
    },
  ];

  return (
    <div className="w-full">
      {/* --- STATS SECTION --- */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground text-sm opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-primary-foreground px-4">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by professionals
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Join thousands of users who have streamlined their document
              workflows with Editexty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed mb-8">
                    {t.content}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${t.bgColor} ${t.textColor} flex items-center justify-center font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none mb-1">
                      {t.name}
                    </h4>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsAndTestimonials;

import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-[#0B1221] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
          Ready to master your <br className="hidden md:block" /> PDF workflow?
        </h2>

        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Start your 14-day free trial today. No credit card required.
          Experience the power of Editexty.
        </p>

        <div className="flex flex-col items-center gap-6">
          <button className="bg-primary hover:bg-secondary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            Get Started Now
          </button>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0B1221] bg-slate-700 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-slate-600 to-slate-800" />
                  <Image
                    src="/profile.png"
                    alt="slikica"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#0B1221] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                +10k
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              Joined by 10,000+ users this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

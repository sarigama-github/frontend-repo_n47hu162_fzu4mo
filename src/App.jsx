import React from 'react'

function GlowingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Purple glow */}
      <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-purple-600/30 blur-[120px] animate-float" />
      {/* Green glow */}
      <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-emerald-500/25 blur-[120px] animate-float-delayed" />
      {/* Soft gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-300/10 blur-[100px] animate-pulse-slow" />
    </div>
  )
}

function EnergyDivider() {
  return (
    <div className="relative my-14">
      <div className="h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-400/40 to-emerald-500/0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(250,204,21,0.35),transparent)] animate-energy-flow" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-zinc-100 relative overflow-hidden">
      <GlowingOrbs />

      {/* Subtle star field */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.05),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(245,158,11,0.05),transparent_40%)]" />

      {/* Navigation / Brand */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-emerald-400 ring-2 ring-amber-300/40 shadow-[0_0_25px_rgba(168,85,247,0.35)]" />
            <span className="text-lg tracking-wide font-semibold text-zinc-200">Money Reiki Mastery</span>
          </div>
          <a href="#join" className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-900 font-semibold shadow-[0_0_18px_rgba(16,185,129,0.45)] ring-1 ring-amber-200/40 hover:brightness-110 transition">
            Join Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-300/80 mb-4">21-Day Energy Journey</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl leading-tight text-zinc-50">
              Money Reiki Mastery
            </h1>
            <p className="mt-5 text-zinc-300/90 text-lg max-w-xl font-poppins">
              Heal money blocks, clear karmic patterns, and activate your natural abundance. In 21 days, align your frequency with wealth using guided Reiki attunements, daily rituals, and embodied practices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a id="join" href="#cta" className="group inline-flex items-center justify-center px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_0_45px_rgba(16,185,129,0.45)] ring-2 ring-amber-200/40 hover:shadow-[0_0_65px_rgba(250,204,21,0.35)] transition relative overflow-hidden">
                <span className="relative z-10">Join Money Reiki Mastery</span>
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(250,204,21,0.25),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <p className="text-zinc-400 text-sm font-poppins">Feel the shift from day one ✨</p>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500/40 via-fuchsia-500/40 to-emerald-400/40">
              <div className="rounded-xl bg-[#0e0e14] p-6 ring-1 ring-white/5">
                <div className="h-56 sm:h-72 rounded-lg bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(650px_circle_at_0%_0%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(700px_circle_at_100%_100%,rgba(245,158,11,0.18),transparent_40%)]" />

                  {/* Flowing particles */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-purple-400/0 via-purple-300/60 to-purple-400/0 animate-energy-flow" />
                  <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/60 to-emerald-400/0 animate-energy-flow [animation-delay:200ms]" />

                  {/* Floating rune */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-28 w-28 rounded-full border border-amber-300/40 shadow-[0_0_35px_rgba(250,204,21,0.25)] animate-slow-spin" />
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-playfair text-2xl text-zinc-50">Attune Your Frequency</h3>
                  <p className="mt-2 text-zinc-400 font-poppins">Guided Reiki transmissions designed to harmonize your money field and awaken prosperity consciousness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnergyDivider />

      {/* Benefits */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Heal Money Karma',
              desc: 'Release inherited patterns and energetic debts that keep wealth at a distance.',
              glow: 'from-purple-400/30',
            },
            {
              title: 'Activate Flow',
              desc: 'Open channels of receiving with daily Reiki activations and somatic rituals.',
              glow: 'from-fuchsia-400/30',
            },
            {
              title: 'Manifest Abundance',
              desc: 'Align belief, body, and behavior to become a match for your next level of wealth.',
              glow: 'from-emerald-400/30',
            },
          ].map((b, i) => (
            <div key={i} className="relative rounded-2xl p-0.5 bg-gradient-to-br from-zinc-700/40 to-zinc-800/40">
              <div className="relative h-full rounded-[1rem] bg-[#0e0e14] p-6 ring-1 ring-white/5 overflow-hidden">
                <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${b.glow} via-transparent to-transparent blur-2xl opacity-40`} />
                <h3 className="font-playfair text-xl text-zinc-50">{b.title}</h3>
                <p className="mt-2 text-zinc-400 font-poppins">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EnergyDivider />

      {/* About */}
      <section className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-3xl text-zinc-50">Meet Your Guide</h2>
            <p className="mt-3 text-emerald-300/80 tracking-wide uppercase text-xs">Ruthvik Nittala — Business Healer & Reiki Master</p>
            <p className="mt-5 text-zinc-300/90 font-poppins">
              I help founders, creators, and professionals clear energetic resistance to money and success. With a blend of Reiki mastery, business energetics, and practical integration, I guide you into embodied wealth.
            </p>
            <p className="mt-4 text-zinc-400 font-poppins">
              In Money Reiki Mastery, you’ll experience attunements, breath work, journaling prompts, and aligned action to unlock your next level of abundance.
            </p>

            <a href="#cta" className="mt-7 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_0_45px_rgba(16,185,129,0.45)] ring-2 ring-amber-200/40 hover:shadow-[0_0_65px_rgba(250,204,21,0.35)] transition relative overflow-hidden">
              <span className="relative z-10">Join Money Reiki Mastery</span>
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(250,204,21,0.25),transparent)] translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-amber-300/30 shadow-[0_0_40px_rgba(250,204,21,0.18)]">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-700/20 via-fuchsia-600/20 to-emerald-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full border border-amber-300/50 shadow-[0_0_35px_rgba(250,204,21,0.25)] animate-slow-spin" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(400px_circle_at_70%_30%,rgba(16,185,129,0.2),transparent_40%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer id="cta" className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h3 className="font-playfair text-3xl text-zinc-50">Ready to Align with Abundance?</h3>
          <p className="mt-3 text-zinc-400 font-poppins">Commit to 21 days of energetic alignment. Your future self is already grateful.</p>
          <a href="#" className="mt-6 inline-flex items-center px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_0_45px_rgba(16,185,129,0.45)] ring-2 ring-amber-200/40 hover:shadow-[0_0_65px_rgba(250,204,21,0.35)] transition relative overflow-hidden">
            <span className="relative z-10">Join Money Reiki Mastery</span>
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(250,204,21,0.25),transparent)] translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

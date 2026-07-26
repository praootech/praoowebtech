export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.12),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.12),transparent_40%)]"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:items-center md:pt-24 md:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
            A COLLECTIVE OF INDEPENDENT BUILDERS
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Simple Software.
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">
              Nothing In The Way.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">
            Praootech is a collective of independent engineers, designers,
            and product specialists. We believe software works best when it
            does less — so every app we touch is stripped down to what
            people actually need, without the clutter.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-10 dark:from-teal-500/5 dark:to-blue-600/10">
      <div
        aria-hidden
        className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-teal-400/20 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl"
      />

      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="space-y-2.5 px-5 py-6 font-mono text-xs text-slate-500 dark:text-slate-400">
          <p>
            <span className="text-blue-500">const</span> app ={" "}
            <span className="text-teal-500">keepSimple</span>(idea)
          </p>
          <p className="pl-4 text-slate-400 dark:text-slate-500">
            → remove clutter, keep essentials
          </p>
          <p>
            <span className="text-blue-500">ship</span>(app,{" "}
            <span className="text-amber-500">&quot;with one team&quot;</span>)
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900">
        <div className="flex -space-x-2">
          {["from-teal-400 to-teal-600", "from-blue-400 to-blue-600", "from-indigo-400 to-indigo-600"].map(
            (grad, i) => (
              <span
                key={i}
                className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br ${grad} dark:border-slate-900`}
              />
            )
          )}
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 dark:text-white">
            Your project team
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Assembled per engagement
          </p>
        </div>
      </div>
    </div>
  );
}

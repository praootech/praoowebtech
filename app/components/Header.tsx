export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rotate-6 rounded-lg bg-gradient-to-br from-teal-400 to-blue-600" />
            <span className="absolute inset-0 -rotate-6 rounded-lg bg-gradient-to-br from-teal-400/40 to-blue-600/40" />
            <span className="relative text-sm font-bold text-white">P</span>
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Praootech
          </span>
        </a>

        <a
          href="mailto:praootech@gmail.com"
          className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-transform hover:scale-[1.03]"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}

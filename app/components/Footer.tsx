const columns = [
  {
    title: "Get In Touch",
    links: [{ label: "praootech@gmail.com", href: "mailto:praootech@gmail.com" }],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rotate-6 rounded-lg bg-gradient-to-br from-teal-400 to-blue-600" />
                <span className="relative text-xs font-bold text-white">
                  P
                </span>
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                Praootech
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              A collective of independent engineers, designers, and product
              specialists, building simple software under one name.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500">
                  {col.title.toUpperCase()}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-white/10 dark:text-slate-500">
          © {year} Praootech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

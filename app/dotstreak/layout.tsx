import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DotStreakLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col bg-white text-slate-900 dark:bg-black dark:text-white">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elisabetta Mancini | Danza del Ventre e Samba a Perugia",
  description:
    "Corsi di danza del ventre, samba, spettacoli ed eventi a Perugia e in Umbria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>

        <footer className="bg-[#111] py-8 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/80 md:flex-row">
            <p>
              © {new Date().getFullYear()} Elisabetta Mancini. Tutti i diritti
              riservati.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/privacy"
                className="transition hover:text-yellow-400"
              >
                Informativa Privacy
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-yellow-400"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
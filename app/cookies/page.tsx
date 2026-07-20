import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <>
     {/* MENU */}
      <header className="w-full bg-[#d8c08f] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-wide text-[#111]">
            <Link href="/" className="transition hover:text-yellow-600">
              Home Page
            </Link>

            <Link
              href="/corsi/danza-del-ventre"
              className="transition hover:text-yellow-600"
            >
              Danza del Ventre
            </Link>

            <Link
              href="/corsi/samba"
              className="transition hover:text-yellow-600"
            >
              Samba
            </Link>

            <Link
              href="/corsi/spettacoli"
              className="transition hover:text-yellow-600"
            >
              Spettacoli
            </Link>
               <Link href="/contatti" className="hover:text-yellow-600">
  Contatti
</Link>
          </nav>
        </div>
      </header>
    <main className="min-h-screen bg-[#f7f1df] text-[#191919]">
      {/* HERO */}
      <section className="bg-[#d8c08f] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-yellow-800">
            Elisabetta Mancini
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold md:text-7xl">
            Cookie Policy
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-700">
            Informazioni sull'utilizzo dei cookie da parte del sito
            www.elisabettamancini.it.
          </p>
        </div>
      </section>

      {/* CONTENUTO */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl space-y-12 px-6">

          <section>
            <h2 className="font-serif text-3xl font-bold text-yellow-700">
              Cosa sono i cookie
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              I cookie sono piccoli file di testo che vengono salvati sul
              dispositivo dell'utente durante la navigazione e servono a
              migliorare l'esperienza di utilizzo del sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-yellow-700">
              Cookie tecnici
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Questo sito utilizza cookie tecnici indispensabili per il corretto
              funzionamento delle pagine e dei servizi offerti.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-yellow-700">
              Cookie di terze parti
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Alcuni servizi esterni, come Google Maps, YouTube o i social
              network, potrebbero installare cookie di terze parti quando
              vengono visualizzati i loro contenuti.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold text-yellow-700">
              Contatti
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Per qualsiasi informazione relativa ai cookie è possibile
              contattare:
            </p>

            <p className="mt-4 text-lg font-semibold">
              info@elisabettamancini.it
            </p>
          </section>

          <div className="pt-10 text-center">
            <Link
              href="/"
              className="inline-block rounded bg-[#111] px-10 py-4 font-semibold text-white transition hover:bg-black"
            >
              Torna alla Home
            </Link>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}
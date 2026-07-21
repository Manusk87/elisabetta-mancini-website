"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
const contatti = [
  {
    titolo: "Informazioni generali",
    valore: "info@elisabettamancini.it",
    link: "mailto:info@elisabettamancini.it",
  },
  {
    titolo: "Telefono",
    valore: "+39 327 657 8822",
    link: "tel:+393276578822",
  },
  {
    titolo: "Corsi di Danza del Ventre",
    valore: "danzadelventre@elisabettamancini.it",
    link: "mailto:danzadelventre@elisabettamancini.it",
  },
  {
    titolo: "Corsi di Samba",
    valore: "samba@elisabettamancini.it",
    link: "mailto:samba@elisabettamancini.it",
  },
  {
    titolo: "Spettacoli ed Eventi",
    valore: "spettacoli@elisabettamancini.it",
    link: "mailto:spettacoli@elisabettamancini.it",
  },
];

export default function Contatti() {
  return (
<>
  {/* MENU */}
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
            Contatti
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-700">
            Per informazioni sui corsi, spettacoli, eventi privati o richieste
            di collaborazione puoi contattarmi attraverso uno dei recapiti
            riportati qui sotto.
          </p>
        </div>
      </section>

      {/* CONTATTI */}
    <section
  id="contatti"
className="scroll-mt-32 py-24"
>
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contatti.map((contatto) => (
              <article
                key={contatto.titolo}
                className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2"
              >
                <h2 className="font-serif text-3xl font-bold text-yellow-700">
                  {contatto.titolo}
                </h2>

                <a
                  href={contatto.link}
                  className="mt-6 block break-all text-xl font-semibold text-gray-800 transition hover:text-yellow-700"
                >
                  {contatto.valore}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTENZA */}
      <section className="bg-[#111] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Hai bisogno di informazioni?
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
            Ti risponderò il prima possibile
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Se desideri ricevere informazioni sui corsi di danza del ventre,
            sui corsi di samba oppure richiedere uno spettacolo personalizzato,
            scrivimi indicando la tua richiesta e sarai ricontattato nel più
            breve tempo possibile.
          </p>
        </div>
      </section>

      {/* CTA */}
  <section className="py-24 text-center">
  <div className="mx-auto max-w-4xl px-6">
    <h2 className="font-serif text-4xl font-bold md:text-6xl">
      Seguimi anche sui social
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-700">
      Rimani aggiornata su corsi, eventi, spettacoli, workshop e novità.
    </p>

    <div className="mt-10 flex justify-center gap-8">
<a
  href="https://www.facebook.com/ElisabettaManciniDanceshow/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2] text-white transition duration-300 hover:scale-110 hover:shadow-xl"
  aria-label="Facebook"
>
  <FaFacebookF size={30} />
</a>

   <a
  href="https://www.instagram.com/elisabetta_mancini_danceshow/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition duration-300 hover:scale-110 hover:shadow-xl"
  aria-label="Instagram"
>
  <FaInstagram size={32} />
</a>
    </div>

    <div className="mt-12">
      <Link
        href="/"
        className="rounded bg-[#1a1a1a] px-10 py-4 font-semibold text-white transition hover:bg-black"
      >
        Torna alla Home
      </Link>
    </div>
  </div>
</section>
      {/* FORM */}
<ContactForm />
    </main>
    </>
  );
}

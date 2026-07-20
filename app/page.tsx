
"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import Link from "next/link";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#f1efff] `}>
{/* HERO */}
{/* TOP MENU */}
<header className="w-full bg-[#d8c08f] shadow-sm">
  <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
    <nav className="flex flex-wrap justify-center gap-8 text-sm font-semibold uppercase tracking-wide text-[#111]">
    
        <Link
              href="/corsi/danza-del-ventre"
              className="transition hover:text-yellow-600"
            >
              Corsi di Danza del Ventre
            </Link>

            <Link
              href="/corsi/samba"
              className="transition hover:text-yellow-600"
            >
              Corsi di Samba
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

{/* HERO */}
<section
  className="relative overflow-hidden bg-black text-white"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/foto3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
 <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-16 text-center">
    <div>
      <p className={`mb-6 text-2xl font-bold uppercase tracking-[0.4em] text-yellow-300`}>
        Elisabetta Mancini
      </p>

      <h1 className={`font-serif text-4xl font-bold leading-tight md:text-7xl`}>
        Danza del Ventre e Samba  a{" "}
        <span className={`text-yellow-400`}>Perugia</span>
      </h1>

      <p className={`mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-white/80 md:text-xl `}>
        Spettacoli eleganti, corsi di danza coinvolgenti ed esibizioni artistiche
        per matrimoni, feste private ed eventi esclusivi.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
<Link
  href="/contatti#contact-form"
  className="inline-block rounded bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
>
  Iscrizione corsi
</Link>

  <Link
                 href="/contatti"
              className="rounded border border-yellow-300 px-8 py-4 font-semibold text-yellow-100 transition hover:bg-yellow-300 hover:text-black"
            >
              Contatti
            </Link>
      </div>
    </div>
  </div>
</section>

     {/* CHI SONO */}
<section className="bg-[#f7f1df] py-12 md:py-24">
  <div className="mx-auto grid max-w-[1800px] items-center gap-6 px-6 md:grid-cols-[1.2fr_1fr_1.2fr] md:gap-10">

    {/* IMMAGINE SINISTRA */}
    <div className="overflow-hidden rounded-2xl shadow-2xl">
      <img
        src="/images/foto4.jpg"
        alt="Danza del ventre"
        className="h-[800px] w-full object-cover"
      />
    </div>

{/* TESTO CENTRALE */}
<div className="text-center">
  <p
    className={`mt-0 font-serif text-base leading-relaxed text-gray-700 sm:text-xl md:mt-10 md:text-2xl ${bodyFont.className}`}
  >
    Sono un'insegnante e performer di danza del ventre e samba brasiliano
    a Perugia dal 2010.
  </p>

  <p
    className={`mt-8 font-serif text-base leading-relaxed text-gray-700 sm:text-lg md:text-2xl ${bodyFont.className}`}
  >
    Con anni di esperienza, organizzo corsi per tutti i livelli,
    spettacoli ed esibizioni artistiche per matrimoni,
    eventi privati e serate speciali in tutta Italia.
  </p>

  <p
    className={`mt-8 font-serif text-base leading-relaxed text-gray-700 sm:text-lg md:text-2xl ${bodyFont.className}`}
  >
    La mia missione è trasmettere attraverso la danza benessere,
    energia ed espressione personale.
    Nei miei corsi accompagno ogni allieva in un percorso di crescita,
    aiutandola a sviluppare consapevolezza del corpo,
    femminilità, coordinazione e fiducia in sé stessa.
  </p>

  <div className="mt-12 flex flex-wrap justify-center gap-4">
    <Link
      href="/contatti"
      className="rounded border border-black px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
    >
      Contatti
    </Link>
  </div>
</div>

    {/* IMMAGINE DESTRA */}
    <div className="overflow-hidden rounded-2xl shadow-2xl">
      <img
        src="/images/foto5.jpg"
        alt="Samba brasiliano"
        className="h-[800px] w-full object-cover"
      />
    </div>

  </div>
</section>

     {/* SERVIZI */}
<section className="bg-[#111] py-24 text-white">
<div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-10">

    <div className="mb-16 text-center">
     

      <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
        I miei servizi
      </h2>
    </div>

   <div className="grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}
      <Link href="/corsi/danza-del-ventre">
      <div className="group overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-2xl">
        <div className="overflow-hidden">
          <img
            src="/images/foto6.jpg"
            alt="Corso danza del ventre"
            className="h-[380px] sm:h-[450px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className={`p-8 text-center `}>
       <h3 className="font-serif text-4xl font-bold leading-tight text-yellow-400 sm:text-5xl">
  Corsi di Danza del Ventre
</h3>
        </div>
      </div>
</Link>
      {/* CARD 2 */}
      <Link href="/corsi/samba">
      <div className="group overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-2xl">
        <div className="overflow-hidden">
          <img
            src="/images/foto8.jpg"
            alt="Corso di samba"
            className="h-[380px] sm:h-[450px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className={`p-8 text-center `}>
          <h3 className="font-serif text-4xl font-bold leading-tight text-yellow-400 sm:text-5xl">
            Corsi di Samba
          </h3>
        </div>
      </div>
</Link>
      {/* CARD 3 */}
      <Link href="/corsi/spettacoli">
      <div className="group overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-2xl">
        <div className="overflow-hidden">
          <img
            src="/images/foto7.jpg"
            alt="Spettacoli"
            className="h-[380px] sm:h-[450px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className={`p-8 text-center `}>
          <h3 className="font-serif text-4xl font-bold leading-tight text-yellow-400 sm:text-5xl">
            Spettacoli per eventi
          </h3>
        </div>
      </div>
</Link>
    </div>
  </div>

</section>
<section className="bg-black py-24">
  <div className="mx-auto max-w-[1800px] px-4">
    <div className="overflow-hidden rounded-3xl shadow-2xl">
      <video
        className="max-h-[1000px] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/videos/Videococca.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
    </div>
  </div>
</section>
<section className="overflow-hidden bg-[#f7f1df] py-16 sm:py-20 md:py-24">
  <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-10">
    {/* Titolo */}
    <div className="mx-auto mb-14 max-w-5xl text-center sm:mb-20">
      <h2 className="break-words font-serif text-4xl font-bold leading-[1.05] text-gray-900 sm:text-5xl md:text-6xl">
        L&apos;arte della danza, vissuta con passione e professionalità
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 sm:mt-8 sm:text-xl md:text-2xl">
        Ecco tre motivi per cui scegliere i miei corsi e i miei spettacoli.
      </p>
    </div>

    {/* Card */}
    <div className="grid w-full gap-8 md:grid-cols-3 md:gap-10">
      {/* Colonna 1 */}
      <div className="min-w-0 rounded-3xl bg-white p-7 shadow-xl sm:p-10">
        <h3 className="mb-8 break-words text-center font-serif text-3xl font-bold leading-tight text-yellow-700">
          Corsi di Samba
        </h3>

        <ul className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          <li>
            • Studierai il ritmo, la musicalità e la tradizione del samba,
            rispettando i tuoi tempi di apprendimento.
          </li>
          <li>
            • Migliorerai la postura, la coordinazione e la tonicità muscolare
            già dalle prime lezioni.
          </li>
          <li>
            • Un percorso che valorizza la tua personalità, favorendo crescita,
            energia e benessere.
          </li>
        </ul>
      </div>

      {/* Colonna 2 */}
      <div className="min-w-0 rounded-3xl bg-white p-7 shadow-xl sm:p-10">
        <h3 className="mb-8 break-words text-center font-serif text-3xl font-bold leading-tight text-yellow-700">
          Spettacoli di
          <br />
          Danza del Ventre e Samba
        </h3>

        <ul className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          <li>
            • Performance coinvolgenti, capaci di emozionare e catturare il
            pubblico.
          </li>
          <li>
            • Coreografie curate nei minimi dettagli, con eleganza e forte
            presenza scenica.
          </li>
          <li>
            • Spettacoli personalizzati per valorizzare matrimoni, eventi
            privati e occasioni speciali.
          </li>
        </ul>
      </div>

      {/* Colonna 3 */}
      <div className="min-w-0 rounded-3xl bg-white p-7 shadow-xl sm:p-10">
        <h3 className="mb-8 break-words text-center font-serif text-3xl font-bold leading-tight text-yellow-700">
          Corsi di Danza del Ventre
        </h3>

        <ul className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          <li>
            • Svilupperai consapevolezza corporea ed espressività attraverso il
            movimento.
          </li>
          <li>
            • Acquisirai maggiore sicurezza, femminilità e libertà di
            espressione.
          </li>
          <li>
            • Studierai tecnica, cultura e crescita personale in un percorso
            completo.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#111] py-24 text-center text-white">
  <div className="mx-auto max-w-4xl px-6">
    <h2 className="font-serif text-4xl font-bold md:text-6xl">
      Hai bisogno di maggiori informazioni?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/80">
      Compila il modulo di contatto e ti risponderò il prima possibile per
      fornirti tutte le informazioni sui corsi, le lezioni private e gli
      spettacoli.
    </p>

    <Link
      href="/contatti#contact-form"
      className="mt-10 inline-block rounded bg-yellow-400 px-10 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300"
    >
      Richiedi informazioni
    </Link>
  </div>
</section>
    </main>

  );
}
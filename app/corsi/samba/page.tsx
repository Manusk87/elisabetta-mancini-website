"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import Link from "next/link";

const benefici = [
  {
    titolo: "Forma fisica",
    descrizione:
      "Un allenamento dinamico che aiuta a migliorare tonicità, resistenza e mobilità.",
  },
  {
    titolo: "Coordinazione",
    descrizione:
      "Le lezioni sviluppano controllo del corpo, ritmo e precisione nei movimenti.",
  },
  {
    titolo: "Sicurezza in sé",
    descrizione:
      "Il samba favorisce espressività, presenza scenica e maggiore fiducia nel proprio corpo.",
  },
];

const contenutiCorso = [
  "Tecnica di base del samba",
  "Sviluppo muscolare e tonicità",
  "Postura e controllo del corpo",
  "Coordinazione e resistenza",
  "Musicalità e interpretazione",
  "Percorso progressivo adatto anche a chi parte da zero",
];

const informazioniCorso = [
  {
    titolo: "Sede",
    descrizione:
      "Via del Giaggiolo, Perugia\npresso Capoeira Coquinho Baiano",
  },
  {
    titolo: "Costo mensile",
    descrizione: "€55",
  },
  {
    titolo: "Livello",
    descrizione: "Adatto anche a principianti assolute",
  },
  {
    titolo: "Orari",
    descrizione:
      "Giovedì 17:00 – 18:00\nVenerdì 18:00 – 19:00",
  },
];

const lezioniPrivate = [
  {
    titolo: "Lezione singola",
    descrizione: "€50/ora per esterne – €35/ora per le allieve",
  },
  {
    titolo: "Due ore consecutive",
    descrizione: "€90 per esterne – €60 per le allieve",
  },
  {
    titolo: "Pacchetto di 10 ore",
    descrizione:
      "€400 per esterne – €250 per le allieve. Da utilizzare entro 60 giorni.",
  },
  {
    titolo: "Coreografia personalizzata",
    descrizione: "€80 per ogni minuto di coreografia da realizzare",
  },
  {
    titolo: "Workshop e stage",
    descrizione:
      "€75/ora, minimo 2 ore, più trasferta, pasti ed eventuale alloggio",
  },
  {
    titolo: "Lezione privata di gruppo",
    descrizione:
      "Minimo 5 persone. €25 a persona fino a 10 partecipanti, poi €20 a persona.",
  },
];

export default function Samba() {
  return (
    <main className="min-h-screen bg-[#f7f1df] text-[#191919]">
      {/* MENU */}
      <header className="w-full bg-[#d8c08f] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-wide">
            <Link href="/" className="transition hover:text-yellow-700">
              Home Page
            </Link>

            <Link
              href="/corsi/danza-del-ventre"
              className="transition hover:text-yellow-700"
            >
              Danza del Ventre
            </Link>

            <Link
              href="/corsi/spettacoli"
              className="transition hover:text-yellow-700"
            >
              Spettacoli
            </Link>

            <Link
              href="/contatti"
              className="transition hover:text-yellow-700"
            >
              Contatti
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex min-h-[75vh] items-center overflow-hidden bg-black bg-cover bg-top bg-no-repeat text-white md:bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.72)), url('/images/foto8.jpg')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-yellow-300 md:text-lg">
            Elisabetta Mancini
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Corso di Samba a Perugia
          </h1>

          <h2 className="mt-5 font-serif text-3xl text-yellow-400 md:text-5xl">
            Impara il Samba in Umbria
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            Energia, tecnica e femminilità in un percorso progressivo adatto
            anche a chi parte da zero.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#corso"
              className="rounded bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Scopri il corso
            </Link>

            <Link
              href="#prenotazione"
              className="rounded border border-yellow-300 px-8 py-4 font-semibold text-yellow-100 transition hover:bg-yellow-300 hover:text-black"
            >
              Prenota una lezione
            </Link>
          </div>
        </div>
      </section>

      {/* PRESENTAZIONE */}
      <section id="corso" className="py-24">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Il percorso
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Energia, tecnica e sicurezza
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-gray-700">
              Il corso di samba è dedicato alle donne che desiderano migliorare
              forma fisica, coordinazione, resistenza, tonicità e sicurezza in
              sé.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Le lezioni sono incentrate sulla tecnica del samba, sullo sviluppo
              muscolare, sulla postura, sulla musicalità e
              sull’interpretazione.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Il programma segue un percorso progressivo ed è adatto anche a
              chi non ha mai praticato samba o altre discipline di danza.
            </p>
          </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    loop
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    speed={1200}
  >
{[
  "/images/foto25.jpg",
  "/images/foto26.jpg",
  "/images/foto8.jpg",
  "/images/foto13.jpg",
].map((image) => (
  <SwiperSlide key={image}>
    <img
      src={image}
      alt="Corso di samba a Perugia"
      className={`h-[500px] w-full object-cover md:h-[750px] ${
        image === "/images/foto13.jpg"
          ? "object-[center_60%]"
          : "object-top"
      }`}
    />
  </SwiperSlide>
))}
  </Swiper>
</div>
        </div>
      </section>

      {/* BENEFICI */}
      <section className="bg-[#111] py-24 text-white">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Perché scegliere il samba
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              I benefici del corso
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefici.map((beneficio) => (
              <article
                key={beneficio.titolo}
                className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl"
              >
                <h3 className="font-serif text-3xl font-bold text-yellow-400">
                  {beneficio.titolo}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  {beneficio.descrizione}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENUTI */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Programma
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Cosa imparerai
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Ogni lezione combina allenamento, tecnica e interpretazione per
              costruire una base solida e migliorare gradualmente.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <div className="space-y-5">
              {contenutiCorso.map((contenuto) => (
                <div
                  key={contenuto}
                  className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-none last:pb-0"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                    ✓
                  </span>

                  <p className="text-lg leading-relaxed text-gray-700">
                    {contenuto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFORMAZIONI */}
      <section className="bg-[#d8c08f] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-800">
              Informazioni pratiche
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Sede e costo
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {informazioniCorso.map((informazione) => (
              <article
                key={informazione.titolo}
                className="rounded-3xl bg-white p-8 text-center shadow-xl"
              >
                <h3 className="font-serif text-2xl font-bold">
                  {informazione.titolo}
                </h3>

              <p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-gray-700">
  {informazione.descrizione}
</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-black/15 bg-white/50 p-8 text-center">
            <p className="text-xl font-semibold text-gray-900">
              Il corso si avvia con almeno 6 persone iscritte
            </p>

            <p className="mt-3 text-lg text-gray-700">
           
            Prova gratuita disponibile solamente durante le date promozionali.
            Lezione di prova successiva: €15

            </p>
          </div>
        </div>
      </section>

      {/* LEZIONI PRIVATE */}
      <section className="py-24">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Percorsi personalizzati
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Lezioni private di samba
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Le lezioni private permettono di lavorare in modo specifico su
              tecnica, postura, preparazione fisica e coreografie
              personalizzate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lezioniPrivate.map((lezione) => (
              <article
                key={lezione.titolo}
                className="rounded-3xl bg-[#111] p-8 text-white shadow-xl"
              >
                <h3 className="font-serif text-3xl font-bold text-yellow-400">
                  {lezione.titolo}
                </h3>

<p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-white/75">
  {lezione.descrizione}
</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#d8c08f] p-8">
            <h3 className="font-serif text-3xl font-bold">Condizioni</h3>

            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Per le lezioni private non è prevista una prova gratuita. La
              prenotazione deve essere effettuata almeno 15 giorni prima con
              pagamento anticipato.
            </p>

            <p className="mt-3 text-lg leading-relaxed text-gray-800">
              L’eventuale taglio musicale personalizzato prevede un costo
              aggiuntivo di €20.
            </p>

            <p className="mt-3 text-lg font-semibold text-gray-900">
              La lezione privata di gruppo è ideale anche per addii al nubilato
              e feste private.
            </p>
          </div>
        </div>
      </section>

      {/* PRENOTAZIONE */}
      <section
        id="prenotazione"
        className="bg-black px-6 py-24 text-center text-white"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Inizia a ballare
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
            Prenota il tuo posto
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
            Compila il form per ricevere informazioni sulla nuova sede, sugli
            orari e sulla disponibilità del corso.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti#contact-form"
              className="rounded bg-yellow-400 px-10 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Compila il form
            </Link>

            <Link
              href="/"
              className="rounded border border-white/60 px-10 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
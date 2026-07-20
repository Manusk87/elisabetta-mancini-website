"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
const sedi = [
  {
    giorno: "Lunedì",
    citta: "Castiglione del Lago",
    lezioni: [
      {
        scuola: "Julia Dance Studio",
        indirizzo: "Piazza dell'Aeronautica 7",
        orario: "20:00 – 21:00",
        livello: "Livello base",
      },
    ],
  },
  {
    giorno: "Martedì",
    citta: "Foligno",
    lezioni: [
      {
        scuola: "Cadencia Cubana",
        indirizzo: "Via Ezio Bartolomei, loc. Paciana, blocco C2",
        orario: "18:00 – 19:00",
        livello: "Livello Base",
      },
   {
  scuola: "Spazio Danza",
  indirizzo: "Via Fornaci Hoffman 1",
  corsi: [
    {
      orario: "20:00 – 21:00",
      livello: "Livello Base",
    },
    {
      orario: "21:00 – 22:00",
      livello: "Principianti / Intermedio – minimo 1 anno di esperienza",
    },
  ],
},
    ],
  },
  {
    giorno: "Mercoledì",
    citta: "Perugia",
    lezioni: [
      {
        scuola: "Rock Your Boogie",
        indirizzo: "Via Sandro Penna 72/N, davanti a GLS",
        orario: "17:00 – 18:00",
        livello: "Livello Base 13+",
      },
      {
        scuola: "Rock Your Boogie",
        indirizzo: "Via Sandro Penna 72/N, davanti a GLS",
        orario: "18:30 – 19:30",
        livello: "Livello Base 18+",
      },
      {
        scuola: "Rock Your Boogie",
        indirizzo: "Via Sandro Penna 72/N, davanti a GLS",
        orario: "20:00 – 21:00",
        livello: "Livello Base adulti",
      },
      {
        scuola: "Rock Your Boogie",
        indirizzo: "Via Sandro Penna 72/N, davanti a GLS",
        orario: "21:30 – 22:30",
        livello: "Principianti / Intermedio",
      },
    ],
  },
  {
    giorno: "Giovedì",
    citta: "Spoleto",
    lezioni: [
      {
        scuola: "ASD Team Dance",
        indirizzo: "Via degli Operai 1",
        orario: "21:00 – 22:00",
        livello: "Livello Base / Principianti",
      },
    ],
  },
];

const costiCorso = [
  "€55 mensile",
  "€180 quadrimestrale per Perugia, Spoleto e Spazio Danza a Foligno",
  "Prova gratuita disponibile solamente durante le date promozionali",
  "Lezione di prova successiva: €15",
  "I €15 della prova vengono scalati dal mensile dopo l’iscrizione",
  "Attivazione del corso con un minimo di 6 partecipanti",
  "Prenotazione obbligatoria tramite form",
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

export default function DanzaDelVentre() {
  return (
    <main className="min-h-screen bg-[#f7f1df] text-[#191919]">
      {/* MENU */}
      <header className="w-full bg-[#d8c08f] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-wide">
            <Link href="/" className="transition hover:text-yellow-700">
              Home page
            </Link>

            <Link
              href="/corsi/samba"
              className="transition hover:text-yellow-700"
            >
              Samba
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
          "linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.30)), url('/images/foto19.jpg')"
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-yellow-300 md:text-lg">
            Elisabetta Mancini
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Corsi di Danza del Ventre
          </h1>

          <h2 className="mt-4 font-serif text-3xl text-yellow-400 md:text-5xl">
            Danza del Ventre in Umbria
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            Un percorso dedicato al benessere femminile, alla consapevolezza
            corporea, alla musicalità e all’espressione personale.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#orari"
              className="rounded bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Scopri gli orari
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
      <section className="py-24">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Il percorso
            </p>

            <h2 className="font-serif text-4xl font-bold md:text-6xl">
              Benessere, tecnica ed espressione
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-gray-700">
              I miei corsi di danza del ventre accompagnano le allieve durante tutto
              l’anno accademico con un percorso dedicato al benessere
              femminile, alla consapevolezza corporea, alla postura e alla
              coordinazione.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Le lezioni approfondiscono la tecnica, la musicalità,
              l’espressività e la cultura mediorientale, all’interno di un
              ambiente accogliente e adatto ai diversi livelli di esperienza.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              I corsi sono disponibili a{" "}
              <strong>Perugia, Foligno, Castiglione del Lago e Spoleto</strong>.
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
      "/images/foto15.jpg",
      "/images/foto6.jpg",
      "/images/foto21.jpg",
      "/images/foto22.jpg",
       "/images/foto20.jpg",
        "/images/foto23.jpg",
    ].map((image) => (
      <SwiperSlide key={image}>
        <img
          src={image}
          alt="Corso di danza del ventre in Umbria"
          className="h-[500px] w-full object-cover object-top md:h-[750px]"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
        </div>
      </section>

      {/* ORARI */}
      <section id="orari" className="bg-[#111] py-24 text-white">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Calendario settimanale
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Orari e sedi
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sedi.map((sede) => (
              <article
                key={`${sede.giorno}-${sede.citta}`}
                className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl"
              >
                <div className="mb-8 border-b border-yellow-400/30 pb-6">
                  <p className="text-lg font-bold uppercase tracking-[0.25em] text-yellow-400">
                    {sede.giorno}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
                    {sede.citta}
                  </h3>
                </div>

                <div className="space-y-8">
                  {sede.lezioni.map((lezione, index) => (
                    <div
                      key={`${lezione.scuola}-${lezione.orario}-${index}`}
                      className="rounded-2xl bg-white/5 p-6"
                    >
                      <h4 className="text-xl font-bold text-yellow-300">
                        {lezione.scuola}
                      </h4>

                      <p className="mt-2 text-white/70">
                        {lezione.indirizzo}
                      </p>

                   {lezione.corsi ? (
  <div className="mt-6 space-y-4">
    {lezione.corsi.map((corso, i) => (
      <div
        key={i}
        className="rounded-xl border border-white/10 bg-white/5 p-4"
      >
        <p className="text-lg font-bold">{corso.orario}</p>
        <p className="mt-1 text-white/80">{corso.livello}</p>
      </div>
    ))}
  </div>
) : (
  <>
    <p className="mt-4 text-lg font-bold">
      {lezione.orario}
    </p>

    <p className="mt-1 text-white/80">
      {lezione.livello}
    </p>
  </>
)}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COSTI */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Iscrizioni
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Costi del corso
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Scegli la formula più adatta al tuo percorso e prenota il tuo
              posto prima dell’inizio delle lezioni.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <div className="space-y-5">
              {costiCorso.map((costo) => (
                <div
                  key={costo}
                  className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-none last:pb-0"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                    ✓
                  </span>

                  <p className="text-lg leading-relaxed text-gray-700">
                    {costo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEZIONI PRIVATE */}
      <section className="bg-[#d8c08f] py-24">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-800">
              Percorsi personalizzati
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Lezioni private
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-800">
              Le lezioni individuali e di gruppo sono pensate per chi desidera
              lavorare su tecnica, coreografia e preparazione personale con un
              programma su misura.
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

                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  {lezione.descrizione}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/15 bg-white/50 p-8">
            <h3 className="font-serif text-3xl font-bold">Condizioni</h3>

            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Per le lezioni private non è prevista una prova gratuita. La
              prenotazione deve essere effettuata almeno 15 giorni prima, con
              pagamento anticipato.
            </p>

            <p className="mt-3 text-lg leading-relaxed text-gray-800">
              L’eventuale taglio musicale personalizzato ha un costo aggiuntivo
              di €20.
            </p>

            <p className="mt-3 text-lg font-semibold text-gray-900">
              La lezione privata di gruppo è ideale anche come attività per un
              addio al nubilato.
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
            Inizia il tuo percorso
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
            Prenota il tuo posto
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
            Compila il form per ricevere informazioni sul livello più adatto,
            verificare la disponibilità e prenotare la tua lezione.
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
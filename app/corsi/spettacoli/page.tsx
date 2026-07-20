"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
const tipologieEventi = [
  "Matrimoni",
  "Compleanni",
  "Pool party",
  "Pizza party",
  "Discoteche",
  "Sagre ed eventi di paese",
  "Sfilate di moda",
  "Carnevale",
  "Capodanno",
  "Eventi privati e aziendali",
];

const caratteristicheSpettacolo = [
  {
    titolo: "Da 1 a 3 esibizioni",
    descrizione:
      "Lo spettacolo può essere organizzato con una, due o tre esibizioni distribuite durante l’evento.",
  },
  {
    titolo: "Coreografie personalizzate",
    descrizione:
      "Le esibizioni vengono adattate alla tipologia di evento, alla location e all’atmosfera desiderata.",
  },
  {
    titolo: "Coinvolgimento del pubblico",
    descrizione:
      "Quando appropriato, gli ospiti possono essere coinvolti per creare un momento divertente e memorabile.",
  },
];

const costiSpettacolo = [
  "A partire da €300 netti per eventi in provincia di Perugia",
  "Per eventi fuori provincia vengono aggiunte le spese di trasferta",
  "Quando necessario, devono essere considerate anche le spese di alloggio",
  "Per gli eventi organizzati durante le feste nazionali è prevista una maggiorazione del 30%",
  "Per i matrimoni è prevista una maggiorazione del 50%",
];

const condizioni = [
  "Prenotazione almeno 15 giorni prima durante la bassa stagione",
  "Prenotazione almeno 30 giorni prima durante l’alta stagione",
  "Acconto di €100 non rimborsabile per conferma di partecipazione",
  "È richiesto un camerino privato per la preparazione e il cambio degli abiti",
  "È necessario un parcheggio vicino alla location",
];

export default function Spettacoli() {
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
              href="/corsi/samba"
              className="transition hover:text-yellow-700"
            >
              Samba
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
  className="relative flex min-h-[75vh] items-center overflow-hidden bg-black bg-cover bg-no-repeat text-white"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.72)), url('/images/foto7.jpg')",
    backgroundPosition: "center 75%",
  }}
>
        <div className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-yellow-300 md:text-lg">
            Elisabetta Mancini
          </p>

        <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
  Spettacoli di <br />
  <span className="text-yellow-400">
    Danza del Ventre e Samba
  </span>
</h1>

          <h2 className="mt-5 font-serif text-3xl text-yellow-400 md:text-5xl">
            Animazione per Eventi, Matrimoni e Feste
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            Esibizioni eleganti, coinvolgenti e personalizzate per rendere
            speciale ogni occasione.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#spettacolo"
              className="rounded bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Scopri lo spettacolo
            </Link>

            <Link
                href="/contatti#contact-form"
              className="rounded border border-yellow-300 px-8 py-4 font-semibold text-yellow-100 transition hover:bg-yellow-300 hover:text-black"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </section>

      {/* PRESENTAZIONE */}
      <section id="spettacolo" className="py-24">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Performance personalizzate
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Uno spettacolo creato per il tuo evento
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-gray-700">
              Gli spettacoli di danza del ventre e samba prevedono da una a tre
              esibizioni durante l’evento, con coreografie personalizzate e
              momenti di coinvolgimento del pubblico.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Ogni proposta viene organizzata in base alla tipologia di evento,
              agli spazi disponibili, alla durata richiesta e all’atmosfera che
              si desidera creare.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Le performance sono disponibili per eventi in{" "}
              <strong>Umbria e in tutta Italia</strong>.
            </p>
          </div>

         <div className="overflow-hidden rounded-3xl shadow-2xl">
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    speed={1200}
    loop
  >
    <SwiperSlide>
      <img
        src="/images/foto14.jpg"
        alt="Spettacolo di danza del ventre"
          className="h-[500px] w-full object-cover object-[center_40%] md:h-[750px]"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="/images/foto9.jpg"
        alt="Spettacolo di samba"
        className="h-[500px] w-full object-cover md:h-[750px]"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="/images/foto17.jpg"
        alt="Performance artistica"
        className="h-[500px] w-full object-cover object-[center_20%] md:h-[750px]"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="/images/foto100.jpg"
        alt="Spettacolo dal vivo"
         className="h-[500px] w-full object-cover object-[center_10%] md:h-[750px]"
      />
    </SwiperSlide>
    <SwiperSlide>
  <img
    src="/images/foto18.jpg"
    alt="Spettacolo dal vivo"
    className="h-[500px] w-full object-cover object-[center_15%] md:h-[750px]"
  />
</SwiperSlide>
  </Swiper>
</div>
        </div>
      </section>

      {/* CARATTERISTICHE */}
      <section className="bg-[#111] py-24 text-white">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
              La performance
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Come si svolge lo spettacolo
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {caratteristicheSpettacolo.map((elemento) => (
              <article
                key={elemento.titolo}
                className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl"
              >
                <h3 className="font-serif text-3xl font-bold text-yellow-400">
                  {elemento.titolo}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  {elemento.descrizione}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTI */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Occasioni speciali
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Per quali eventi
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-700">
              Gli spettacoli possono essere adattati a eventi privati,
              pubblici, aziendali e manifestazioni.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {tipologieEventi.map((evento) => (
              <div
                key={evento}
                className="flex min-h-32 items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <p className="font-serif text-xl font-bold">{evento}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTI */}
      <section className="bg-[#d8c08f] py-24">
        <div className="mx-auto grid max-w-[1500px] items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-800">
              Tariffe
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Costi dello spettacolo
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-gray-800">
              Il costo finale dipende dalla location, dalla data, dal numero di
              esibizioni e dalle caratteristiche dell’evento.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
            <div className="space-y-5">
              {costiSpettacolo.map((costo) => (
                <div
                  key={costo}
                  className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-none last:pb-0"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                    €
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

      {/* CONDIZIONI */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-3xl bg-[#111] p-8 text-white shadow-2xl md:p-14">
            <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Informazioni importanti
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Condizioni di prenotazione
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {condizioni.map((condizione) => (
                <div
                  key={condizione}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 p-6"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                    ✓
                  </span>

                  <p className="text-lg leading-relaxed text-white/80">
                    {condizione}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREVENTIVO */}
      <section
        id="preventivo"
        className="bg-black px-6 py-24 text-center text-white"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Rendi unico il tuo evento
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold md:text-6xl">
            Richiedi un preventivo personalizzato
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
            Indica la data, la località, la tipologia di evento e il numero
            indicativo degli ospiti. Riceverai una proposta adatta alle tue
            esigenze.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
               href="/contatti#contact-form"
              className="rounded bg-yellow-400 px-10 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Richiedi preventivo
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
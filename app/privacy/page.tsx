import Link from "next/link";

export default function PrivacyPolicy() {
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
      <section className="bg-[#d8c08f] py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-serif text-5xl font-bold md:text-7xl">
            Informativa sulla Privacy
          </h1>

          <p className="mt-6 text-xl text-gray-700">
            Informativa sul trattamento dei dati personali ai sensi del
            Regolamento (UE) 2016/679 (GDPR).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-14 px-6">

          <article>
            <h2 className="font-serif text-4xl font-bold">
              1. Titolare del trattamento
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Il Titolare del trattamento dei dati personali è
              <strong> Elisabetta Mancini</strong>.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Per qualsiasi informazione relativa al trattamento dei dati
              personali è possibile scrivere a:
            </p>

            <p className="mt-2 text-lg font-semibold">
              info@elisabettamancini.it
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              2. Dati raccolti
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Durante la navigazione del sito possono essere raccolti:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-8 text-lg leading-8 text-gray-700">
              <li>nome e cognome;</li>
              <li>indirizzo email;</li>
              <li>numero di telefono;</li>
              <li>dati inviati tramite il modulo di contatto;</li>
              <li>
                dati tecnici di navigazione (indirizzo IP, browser, sistema
                operativo, data e ora della visita);
              </li>
              <li>dati raccolti mediante cookie, ove presenti.</li>
            </ul>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              3. Finalità del trattamento
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-8 text-lg leading-8 text-gray-700">
              <li>rispondere alle richieste inviate tramite il sito;</li>
              <li>fornire informazioni sui corsi e sugli spettacoli;</li>
              <li>gestire richieste di prenotazione;</li>
              <li>adempiere agli obblighi di legge;</li>
              <li>migliorare la qualità del sito e dei servizi offerti.</li>
            </ul>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              4. Base giuridica del trattamento
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Il trattamento dei dati personali avviene sulla base del consenso
              dell'interessato, dell'esecuzione di misure precontrattuali
              richieste dall'utente, dell'adempimento di obblighi di legge e del
              legittimo interesse del Titolare.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              5. Conservazione dei dati
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              I dati personali saranno conservati per il tempo strettamente
              necessario al raggiungimento delle finalità indicate nella presente
              informativa e successivamente cancellati o anonimizzati, salvo
              diversi obblighi di legge.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              6. Comunicazione dei dati
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              I dati personali non saranno diffusi. Potranno essere comunicati
              esclusivamente a soggetti autorizzati o a fornitori di servizi
              strettamente necessari al funzionamento del sito, nel rispetto del
              GDPR.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              7. Diritti dell'interessato
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              L'interessato può esercitare i diritti previsti dagli articoli
              15-22 del Regolamento (UE) 2016/679, tra cui:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-8 text-lg leading-8 text-gray-700">
              <li>accesso ai dati personali;</li>
              <li>rettifica dei dati;</li>
              <li>cancellazione dei dati;</li>
              <li>limitazione del trattamento;</li>
              <li>opposizione al trattamento;</li>
              <li>portabilità dei dati;</li>
              <li>revoca del consenso in qualsiasi momento.</li>
            </ul>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Per esercitare tali diritti è possibile scrivere a:
            </p>

            <p className="mt-2 text-lg font-semibold">
              info@elisabettamancini.it
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              8. Sicurezza dei dati
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Il Titolare adotta adeguate misure tecniche e organizzative per
              proteggere i dati personali da accessi non autorizzati,
              divulgazione, modifica o distruzione.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl font-bold">
              9. Cookie
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Il sito può utilizzare cookie tecnici e, previo consenso
              dell'utente, cookie analitici o di terze parti. Per maggiori
              informazioni è possibile consultare la Cookie Policy.
            </p>
          </article>

          <div className="border-t border-gray-300 pt-10 text-center">
            <Link
              href="/"
              className="rounded bg-[#1a1a1a] px-8 py-4 font-semibold text-white transition hover:bg-black"
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
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormData = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  argomento: string;
  messaggio: string;
  privacy: boolean;
};

const initialFormData: ContactFormData = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  argomento: "",
  messaggio: "",
  privacy: false,
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const target = event.target;
    const { name, value } = target;

    setFormData((currentData) => ({
      ...currentData,
      [name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    if (!formData.privacy) {
      setStatus("error");
      setFeedback(
        "Devi leggere e accettare l'informativa sulla privacy.",
      );
      return;
    }

    try {
      const response = await fetch("/api/contatti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Non è stato possibile inviare il messaggio.",
        );
      }

      setStatus("success");
      setFeedback(
        "Grazie! Il tuo messaggio è stato inviato correttamente. Ti risponderò il prima possibile.",
      );
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore. Riprova più tardi.",
      );
    }
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-black/15 bg-white px-5 py-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/20";

  return (
    <section className="bg-[#f7f1df] px-6 py-24">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Testo introduttivo */}
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-700">
            Scrivimi
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Richiedi informazioni
          </h2>

          <p className="mt-7 text-xl leading-relaxed text-gray-700">
            Compila il modulo per ricevere informazioni sui corsi di
            Danza del Ventre, Samba, lezioni private e spettacoli per
            eventi.
          </p>

          <div className="mt-10 space-y-6 rounded-3xl bg-[#d8c08f] p-8 shadow-xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                Informazioni generali
              </p>

              <a
                href="mailto:info@elisabettamancini.it"
                className="mt-1 block break-all text-lg font-semibold hover:underline"
              >
                info@elisabettamancini.it
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                Telefono
              </p>

              <a
                href="tel:+393276578822"
                className="mt-1 block text-lg font-semibold hover:underline"
              >
                +39 327 657 8822
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
  <form
  id="contact-form"
  onSubmit={handleSubmit}
  className="scroll-mt-24 rounded-3xl bg-white p-7 shadow-2xl md:p-12"
>
          <div className="grid gap-7 md:grid-cols-2">
            <label className="block font-medium text-gray-800">
              Nome *
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                autoComplete="given-name"
                placeholder="Il tuo nome"
                className={inputClasses}
              />
            </label>

            <label className="block font-medium text-gray-800">
              Cognome *
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
                autoComplete="family-name"
                placeholder="Il tuo cognome"
                className={inputClasses}
              />
            </label>
          </div>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <label className="block font-medium text-gray-800">
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="nome@email.it"
                className={inputClasses}
              />
            </label>

            <label className="block font-medium text-gray-800">
              Telefono
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="+39..."
                className={inputClasses}
              />
            </label>
          </div>

          <label className="mt-7 block font-medium text-gray-800">
            Argomento *
            <select
              name="argomento"
              value={formData.argomento}
              onChange={handleChange}
              required
              className={inputClasses}
            >
              <option value="">Seleziona un argomento</option>
              <option value="informazioni-generali">
                Informazioni generali
              </option>
              <option value="danza-del-ventre">
                Corsi di Danza del Ventre
              </option>
              <option value="samba">Corsi di Samba</option>
              <option value="spettacoli">
                Spettacoli ed eventi
              </option>
              <option value="lezioni-private">
                Lezioni private
              </option>
              <option value="collaborazioni">
                Collaborazioni
              </option>
            </select>
          </label>

          <label className="mt-7 block font-medium text-gray-800">
            Messaggio *
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              required
              minLength={10}
              rows={7}
              placeholder="Scrivi qui la tua richiesta..."
              className={`${inputClasses} resize-y`}
            />
          </label>

          <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-gray-700">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 shrink-0 accent-yellow-500"
            />

            <span>
              Ho letto l&apos;
              <Link
                href="/privacy"
                target="_blank"
                className="font-semibold text-yellow-700 underline decoration-yellow-600 underline-offset-4"
              >
                informativa sulla privacy
              </Link>{" "}
              e acconsento al trattamento dei dati personali per ricevere
              una risposta alla mia richiesta. *
            </span>
          </label>

          {feedback && (
            <div
              role="status"
              className={`mt-7 rounded-xl border px-5 py-4 text-sm font-medium ${
                status === "success"
                  ? "border-green-300 bg-green-50 text-green-800"
                  : "border-red-300 bg-red-50 text-red-800"
              }`}
            >
              {feedback}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 w-full rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? "Invio in corso..."
              : "Invia la richiesta"}
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            I campi contrassegnati con * sono obbligatori.
          </p>
        </form>
      </div>
    </section>
  );
}
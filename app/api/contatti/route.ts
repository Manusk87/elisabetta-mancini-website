import { NextResponse } from "next/server";
import { getResend } from "@/app/lib/mail";

type ContactRequest = {
  nome?: string;
  cognome?: string;
  email?: string;
  telefono?: string;
  argomento?: string;
  messaggio?: string;
  privacy?: boolean;
};

const destinatari: Record<string, string> = {
  informazioni: "info@elisabettamancini.it",
  "danza-del-ventre": "danzadelventre@elisabettamancini.it",
  samba: "samba@elisabettamancini.it",
  spettacoli: "spettacoli@elisabettamancini.it",
};
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
       
    const body = (await request.json()) as ContactRequest;

    const nome = body.nome?.trim() ?? "";
    const cognome = body.cognome?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const telefono = body.telefono?.trim() ?? "";
    const argomento = body.argomento?.trim() ?? "";
    const messaggio = body.messaggio?.trim() ?? "";
    const privacy = body.privacy === true;

    if (
      !nome ||
      !cognome ||
      !email ||
      !argomento ||
      !messaggio ||
      !privacy
    ) {
      return NextResponse.json(
        {
          message:
            "Compila tutti i campi obbligatori e accetta l'informativa privacy.",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Inserisci un indirizzo email valido." },
        { status: 400 },
      );
    }

    if (messaggio.length < 10) {
      return NextResponse.json(
        { message: "Il messaggio deve contenere almeno 10 caratteri." },
        { status: 400 },
      );
    }

    const destinatario =
      destinatari[argomento] ?? "info@elisabettamancini.it";

    const nomeCompleto = `${nome} ${cognome}`;
    const safeNome = escapeHtml(nomeCompleto);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono || "Non indicato");
    const safeArgomento = escapeHtml(argomento);
    const safeMessaggio = escapeHtml(messaggio).replaceAll("\n", "<br />");

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: "Sito Elisabetta Mancini <contatti@elisabettamancini.it>",
      to: [destinatario],
      replyTo: email,
      subject: `Nuova richiesta dal sito: ${nomeCompleto}`,
      html: `
        <div style="background:#f7f1df;padding:40px 20px;font-family:Arial,sans-serif;color:#191919;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;">
            
            <div style="background:#d8c08f;padding:28px 32px;">
              <p style="margin:0 0 8px;text-transform:uppercase;letter-spacing:3px;font-size:12px;">
                Nuova richiesta dal sito
              </p>

              <h1 style="margin:0;font-family:Georgia,serif;font-size:30px;">
                Contatto da ${safeNome}
              </h1>
            </div>

            <div style="padding:32px;">
              <p><strong>Nome:</strong> ${safeNome}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Telefono:</strong> ${safeTelefono}</p>
              <p><strong>Argomento:</strong> ${safeArgomento}</p>

              <div style="margin-top:28px;padding:22px;background:#f7f1df;border-radius:12px;">
                <p style="margin:0 0 12px;"><strong>Messaggio</strong></p>
                <p style="margin:0;line-height:1.7;">${safeMessaggio}</p>
              </div>

              <p style="margin-top:28px;font-size:13px;color:#666;">
                Il mittente ha dichiarato di aver letto e accettato
                l'informativa sulla privacy.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Errore Resend:", error);

      return NextResponse.json(
        {
          message:
            "Non è stato possibile inviare il messaggio. Riprova più tardi.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Messaggio inviato correttamente.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Errore API contatti:", error);

    return NextResponse.json(
      {
        message:
          "Si è verificato un errore durante l'invio del messaggio.",
      },
      { status: 500 },
    );
  }
}
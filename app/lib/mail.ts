import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY non configurata");
  }

  return new Resend(apiKey);
}

export const destinatari: Record<string, string> = {
  informazioni: "info@elisabettamancini.it",
  "danza-del-ventre": "danzadelventre@elisabettamancini.it",
  samba: "samba@elisabettamancini.it",
  spettacoli: "spettacoli@elisabettamancini.it",
  "lezioni-private": "info@elisabettamancini.it",
  collaborazioni: "info@elisabettamancini.it",
};
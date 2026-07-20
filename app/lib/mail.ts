import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY non configurata");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const destinatari: Record<string, string> = {
  "informazioni-generali": "info@elisabettamancini.it",
  "danza-del-ventre": "danzadelventre@elisabettamancini.it",
  samba: "samba@elisabettamancini.it",
  spettacoli: "spettacoli@elisabettamancini.it",
  "lezioni-private": "info@elisabettamancini.it",
  collaborazioni: "info@elisabettamancini.it",
};
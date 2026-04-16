export const CONTACT = {
  email: "wesley2014.wv53@gmail.com",
  linkedin: "https://www.linkedin.com/in/wesley-vitor-3946152b6",
  site: "wes.experience",
  /** Número internacional sem símbolos (ex.: 5511999999999) para wa.me */
  whatsappE164: "5511999999999",
  github: "https://github.com/Wesley-0001",
} as const;

export const CONTACT_SITE_URL = `https://${CONTACT.site}`;

/** Deploy do terminal BBS (app separado) — ajuste se o slug do repositório no GitHub Pages for outro */
export const BBS_TERMINAL_URL =
  "https://wesley-0001.github.io/BBS-Portfolio-main/" as const;

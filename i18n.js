// Language switcher (DE / EN / IT) with flags. Choice is remembered in localStorage.
const FLAGS = {
  de: '<svg viewBox="0 0 5 3"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>',
  en: '<svg viewBox="0 0 60 30"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>',
  it: '<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>',
};

const I18N = {
  en: {
    "nav.work": "Work", "nav.skills": "Skills", "nav.certs": "Certificates", "nav.contact": "Contact",
    "hero.sub": "Video editing &amp; postproduction. Clean structure, fast-paced storytelling and impactful sound design — for long-form and short-form.",
    "hero.watch": "Watch the work", "hero.hire": "Hire me",
    "work.label": "01 / Selected work", "work.title": "Showcase", "work.long": "Long-form", "work.short": "Short-form · 9:16",
    "c1.p": "Impactful audio depth, layered SFX and dynamic transitions that carry the cut.",
    "c2.p": "Premium color correction and atmospheric look development.",
    "c3.p": "Trial edit for a commentary / documentary channel — first 6:45 min. Pacing, B-roll and retention-focused structure.",
    "c4.p": "Comedic gaming edit with timing-driven cuts, meme inserts and sound effects.",
    "c5.p": "The same idea, condensed into a punchy short.",
    "c6.p": 'Fast gameplay highlight built for vertical feeds. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Watch on YouTube ↗</a>',
    "skills.label": "02 / What I do", "skills.title": "Skills",
    "s1": "Clear structure, tight pacing and hooks that keep viewers watching — long-form and short-form.",
    "s2": "SFX, music editing and mixing that give every cut weight and rhythm.",
    "s3": "Correction and look development in DaVinci Resolve for a consistent, cinematic image.",
    "s4": "Vertical edits, gaming content, memes and timing-driven comedy for TikTok, Reels & Shorts.",
    "certs.label": "03 / Qualifications", "certs.title": "Certificates",
    "contact.label": "04 / Contact",
    "contact.title": 'Let\'s build something <span class="accent">engaging.</span>',
    "contact.p": "Available for long-form and short-form workflows. Send me a message on Discord.",
    "contact.copy": "click to copy", "contact.copied": "copied ✓", "contact.user": "username: tired0844",
    "play": "Play: ",
  },
  de: {
    "nav.work": "Projekte", "nav.skills": "Skills", "nav.certs": "Zertifikate", "nav.contact": "Kontakt",
    "hero.sub": "Videoschnitt &amp; Postproduktion. Klare Struktur, schnelles Storytelling und wirkungsvolles Sound Design — für Long-Form und Short-Form.",
    "hero.watch": "Arbeiten ansehen", "hero.hire": "Jetzt anfragen",
    "work.label": "01 / Ausgewählte Arbeiten", "work.title": "Showcase", "work.long": "Long-Form", "work.short": "Short-Form · 9:16",
    "c1.p": "Starke Audio-Tiefe, geschichtete SFX und dynamische Übergänge, die den Schnitt tragen.",
    "c2.p": "Hochwertige Farbkorrektur und atmosphärische Look-Entwicklung.",
    "c3.p": "Probeschnitt für einen Commentary-/Doku-Kanal — die ersten 6:45 Min. Pacing, B-Roll und eine auf Zuschauerbindung ausgelegte Struktur.",
    "c4.p": "Humorvoller Gaming-Edit mit timing-basierten Schnitten, Meme-Einblendungen und Soundeffekten.",
    "c5.p": "Dieselbe Idee, verdichtet zu einem knackigen Short.",
    "c6.p": 'Schnelles Gameplay-Highlight für vertikale Feeds. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Auf YouTube ansehen ↗</a>',
    "skills.label": "02 / Was ich mache", "skills.title": "Skills",
    "s1": "Klare Struktur, straffes Pacing und Hooks, die Zuschauer dranbleiben lassen — Long-Form und Short-Form.",
    "s2": "SFX, Musikschnitt und Mixing, die jedem Schnitt Gewicht und Rhythmus geben.",
    "s3": "Farbkorrektur und Look-Entwicklung in DaVinci Resolve für ein einheitliches, filmisches Bild.",
    "s4": "Vertikale Edits, Gaming-Content, Memes und Comedy mit perfektem Timing für TikTok, Reels & Shorts.",
    "certs.label": "03 / Qualifikationen", "certs.title": "Zertifikate",
    "contact.label": "04 / Kontakt",
    "contact.title": 'Lass uns etwas <span class="accent">Packendes</span> erschaffen.',
    "contact.p": "Verfügbar für Long-Form- und Short-Form-Projekte. Schreib mir einfach auf Discord.",
    "contact.copy": "zum Kopieren klicken", "contact.copied": "kopiert ✓", "contact.user": "Benutzername: tired0844",
    "play": "Abspielen: ",
  },
  it: {
    "nav.work": "Lavori", "nav.skills": "Competenze", "nav.certs": "Certificati", "nav.contact": "Contatto",
    "hero.sub": "Video editing &amp; post-produzione. Struttura pulita, storytelling dal ritmo serrato e sound design d'impatto — per contenuti long-form e short-form.",
    "hero.watch": "Guarda i lavori", "hero.hire": "Contattami",
    "work.label": "01 / Lavori selezionati", "work.title": "Showcase", "work.long": "Long-form", "work.short": "Short-form · 9:16",
    "c1.p": "Profondità audio d'impatto, SFX stratificati e transizioni dinamiche che sostengono il montaggio.",
    "c2.p": "Correzione colore di alta qualità e sviluppo di look atmosferici.",
    "c3.p": "Montaggio di prova per un canale commentary / documentario — primi 6:45 min. Ritmo, B-roll e struttura pensata per la retention.",
    "c4.p": "Edit gaming comico con tagli a tempo, inserti meme ed effetti sonori.",
    "c5.p": "La stessa idea, condensata in uno short incisivo.",
    "c6.p": 'Highlight di gameplay veloce, pensato per i feed verticali. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Guarda su YouTube ↗</a>',
    "skills.label": "02 / Cosa faccio", "skills.title": "Competenze",
    "s1": "Struttura chiara, ritmo serrato e hook che tengono incollati gli spettatori — long-form e short-form.",
    "s2": "SFX, montaggio musicale e mixaggio che danno peso e ritmo a ogni taglio.",
    "s3": "Correzione colore e sviluppo del look in DaVinci Resolve per un'immagine coerente e cinematografica.",
    "s4": "Edit verticali, contenuti gaming, meme e comicità a tempo per TikTok, Reels e Shorts.",
    "certs.label": "03 / Qualifiche", "certs.title": "Certificati",
    "contact.label": "04 / Contatto",
    "contact.title": 'Creiamo qualcosa di <span class="accent">coinvolgente.</span>',
    "contact.p": "Disponibile per progetti long-form e short-form. Scrivimi un messaggio su Discord.",
    "contact.copy": "clicca per copiare", "contact.copied": "copiato ✓", "contact.user": "nome utente: tired0844",
    "play": "Riproduci: ",
  },
};

const LANGS = Object.keys(I18N);
let currentLang = "en";
const t = (key) => I18N[currentLang][key] ?? I18N.en[key] ?? key;

function setLang(lang) {
  if (!I18N[lang]) lang = "en";
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  document.querySelectorAll(".poster").forEach((p) => {
    p.setAttribute("aria-label", t("play") + p.closest(".card").querySelector("h3").textContent);
  });
  document.getElementById("langFlag").innerHTML = FLAGS[lang];
  document.getElementById("langCode").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-current", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
}

(function initLang() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  document.querySelectorAll("[data-flag]").forEach((el) => (el.innerHTML = FLAGS[el.dataset.flag]));

  const toggle = (open) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open);
  };
  btn.addEventListener("click", (e) => { e.stopPropagation(); toggle(menu.hidden); });
  menu.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    setLang(b.dataset.lang);
    toggle(false);
    btn.focus();
  });
  document.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch {}
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  setLang(saved || (LANGS.includes(browser) ? browser : "en"));
})();

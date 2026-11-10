// Language switcher (DE / EN / IT) with flags. Choice is remembered in localStorage.
const FLAGS = {
  de: '<svg viewBox="0 0 5 3"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>',
  en: '<svg viewBox="0 0 60 30"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>',
  it: '<svg viewBox="0 0 3 2"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>',
};

const I18N = {
  en: {
    "nav.about": "About", "nav.work": "Work", "nav.skills": "Skills", "nav.certs": "Certificates", "nav.contact": "Contact",
    "hero.sub": "Video editing & postproduction. Clean structure, fast-paced storytelling and impactful sound design — for long-form and short-form.",
    "hero.watch": "Watch the work", "hero.hire": "Hire me",
    "about.label": "00 / Inside the Edit", "about.title": "Hey, I'm Tobias.",
    "about.p1": "I'm 26 and the person behind TIRED CUT. To me, editing isn't just lining up clips — it's psychology, rhythm and storytelling. If viewers click away after 3 seconds, the editor hasn't done their job. I make sure they stay.",
    "about.p2": "I work fully remotely and flexibly. Communication is everything: I speak fluent German and English, and actively practice Italian every day to keep improving my basics. If you're looking for a reliable editor who thinks ahead and takes your content to the next level, you're in the right place.",
    "work.label": "01 / Selected work", "work.title": "Showcase", "work.long": "Long-form", "work.short": "Short-form · 9:16",
    "c1.p": "Impactful audio depth, layered SFX and dynamic transitions that carry the cut.",
    "c2.p": "Premium color correction and atmospheric look development.",
    "c3.p": "Trial edit for a commentary / documentary channel — first 6:45 min. Pacing, B-roll and retention-focused structure.",
    "c4.p": "Comedic gaming edit with timing-driven cuts, meme inserts and sound effects.",
    "c5.p": "The same idea, condensed into a punchy short.",
    "c6.p": 'Fast gameplay highlight built for vertical feeds. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Watch on YouTube ↗</a>',
    "skills.label": "02 / What I do", "skills.title": "Skills",
    "skill.01.title": "Full Post-Production (A–Z)", "skill.01.text": "I take care of the entire workflow — from organizing raw footage and shaping the story to the finished video. Any genre, any format: I can cut it.",
    "skill.02.title": "Advanced Audio Engineering", "skill.02.text": "Precisely layered sound effects (SFX), finely edited music and professional mixing create the audio depth that carries every cut.",
    "skill.03.title": "Color Grading & Look Dev", "skill.03.text": "Professional color correction and atmospheric look development in DaVinci Resolve for a consistent, cinematic image at a premium level.",
    "skill.04.title": "High-Retention Shorts", "skill.04.text": "High-energy vertical content for Shorts, Reels and TikTok. Timing-driven comedy, punchy zoom-ins, memes and custom animated captions.",
    "skill.05.title": "Tactical Gaming Edits", "skill.05.text": "Fast shooter highlights, competitive gameplay or structured story formats — I know gaming culture and cut straight to the point.",
    "skill.06.title": "Documentaries & Commentary", "skill.06.text": "Thoughtful content built on strong structure. Clean pacing, considered B-roll and a clear through-line for in-depth YouTube documentaries.",
    "skill.07.title": "Modern Vlogs & Lifestyle", "skill.07.text": "Fast, invisible cuts that preserve a natural flow. I find the best moments and shape them into an engaging rhythm.",
    "skill.08.title": "Commercial & Real Estate", "skill.08.text": "Clean, refined and inviting edits for brands, businesses and real estate that feel professional from the very first frame.",
    "skill.09.title": "Retention & Strategy Focus", "skill.09.text": "I don't edit blindly. Strategically placed hooks, smart pattern interrupts and YouTube analytics help drive higher watch time.",
    "certs.label": "03 / Qualifications", "certs.title": "Certificates",
    "contact.label": "04 / Contact",
    "contact.title": 'Let\'s build something <span class="accent">engaging.</span>',
    "contact.p": "Available for long-form and short-form workflows. Send me a message on Discord.",
    "play": "Play: ",
  },
  de: {
    "nav.about": "Über mich", "nav.work": "Projekte", "nav.skills": "Skills", "nav.certs": "Zertifikate", "nav.contact": "Kontakt",
    "hero.sub": "Videoschnitt & Postproduktion. Klare Struktur, schnelles Storytelling und wirkungsvolles Sound Design — für Long-Form und Short-Form.",
    "hero.watch": "Arbeiten ansehen", "hero.hire": "Jetzt anfragen",
    "about.label": "00 / Inside the Edit", "about.title": "Hey, I'm Tobias.",
    "about.p1": "Ich bin 26 und der Kopf hinter TIRED CUT. Für mich ist Videoschnitt kein stupides Aneinanderreihen von Clips – es ist Psychologie, Rhythmus und Storytelling. Wenn Zuschauer nach 3 Sekunden wegklicken, hat der Editor seinen Job nicht gemacht. Ich sorge dafür, dass sie bleiben.",
    "about.p2": "Ich arbeite vollkommen ortsunabhängig und flexibel. Kommunikation ist dabei alles: Ich spreche fließend Deutsch und Englisch (Fluent) und lerne im Alltag aktiv Italienisch, um meine Grundkenntnisse täglich weiter zu verbessern. Wenn du einen verlässlichen Editor suchst, der mitdenkt und deine Qualität aufs nächste Level hebt, bist du hier richtig.",
    "work.label": "01 / Ausgewählte Arbeiten", "work.title": "Showcase", "work.long": "Long-Form", "work.short": "Short-Form · 9:16",
    "c1.p": "Starke Audio-Tiefe, geschichtete SFX und dynamische Übergänge, die den Schnitt tragen.",
    "c2.p": "Hochwertige Farbkorrektur und atmosphärische Look-Entwicklung.",
    "c3.p": "Probeschnitt für einen Commentary-/Doku-Kanal — die ersten 6:45 Min. Pacing, B-Roll und eine auf Zuschauerbindung ausgelegte Struktur.",
    "c4.p": "Humorvoller Gaming-Edit mit timing-basierten Schnitten, Meme-Einblendungen und Soundeffekten.",
    "c5.p": "Dieselbe Idee, verdichtet zu einem knackigen Short.",
    "c6.p": 'Schnelles Gameplay-Highlight für vertikale Feeds. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Auf YouTube ansehen ↗</a>',
    "skills.label": "02 / Was ich mache", "skills.title": "Skills",
    "skill.01.title": "Full Post-Production (A–Z)", "skill.01.text": "Ich übernehme den kompletten Workflow. Von der Rohmaterial-Strukturierung über feinstes Storytelling bis zum fertigen Video. Egal welches Genre – ich cutte alles.",
    "skill.02.title": "Advanced Audio Engineering", "skill.02.text": "Perfekt gesetzte, geschichtete Soundeffekte (SFX), präzises Musik-Editing und professionelles Mixing für akustische Tiefe, die den Schnitt trägt.",
    "skill.03.title": "Color Grading & Look Dev", "skill.03.text": "Professionelle Farbkorrektur und atmosphärische Look-Entwicklung in DaVinci Resolve für ein konsistentes, cineastisches Bild auf Premium-Niveau.",
    "skill.04.title": "High-Retention Shorts", "skill.04.text": "Vertikaler Content (Shorts, Reels, TikTok) auf Anschlag. Timing-driven Comedy, packende Zoom-Ins, Memes und maßgeschneiderte, animierte Untertitel.",
    "skill.05.title": "Tactical Gaming Edits", "skill.05.text": "Ob schnelle Shooter-Highlights, kompetitive Gameplays oder strukturierte Story-Formate – ich kenne die Gaming-Kultur und schneide exakt auf den Punkt.",
    "skill.06.title": "Documentaries & Commentary", "skill.06.text": "Tiefgründiger Content, der von Struktur lebt. Sauberes Pacing, durchdachter B-Roll-Einsatz und roter Faden für anspruchsvolle YouTube-Dokumentationen.",
    "skill.07.title": "Modern Vlogs & Lifestyle", "skill.07.text": "Schnelle, unsichtbare Schnitte, die den natürlichen Fluss beibehalten. Ich filtere die besten Momente heraus und baue eine packende Dynamik auf.",
    "skill.08.title": "Commercial & Real Estate", "skill.08.text": "Clean, edel und repräsentativ. Hochwertige Schnitte für Marken, Businesses oder Immobilien-Content, die sofort professionell und einladend wirken.",
    "skill.09.title": "Retention & Strategy Focus", "skill.09.text": "Ich schneide nicht blind. Höhere Watchtime durch strategisch platzierte Hooks, smarte Pattern Interrupts und Fokus auf die YouTube-Analytics.",
    "certs.label": "03 / Qualifikationen", "certs.title": "Zertifikate",
    "contact.label": "04 / Kontakt",
    "contact.title": 'Lass uns etwas <span class="accent">Packendes</span> erschaffen.',
    "contact.p": "Verfügbar für Long-Form- und Short-Form-Projekte. Schreib mir einfach auf Discord.",
    "play": "Abspielen: ",
  },
  it: {
    "nav.about": "Chi sono", "nav.work": "Lavori", "nav.skills": "Competenze", "nav.certs": "Certificati", "nav.contact": "Contatto",
    "hero.sub": "Video editing & post-produzione. Struttura pulita, storytelling dal ritmo serrato e sound design d'impatto — per contenuti long-form e short-form.",
    "hero.watch": "Guarda i lavori", "hero.hire": "Contattami",
    "about.label": "00 / Inside the Edit", "about.title": "Hey, sono Tobias.",
    "about.p1": "Ho 26 anni e sono la persona dietro TIRED CUT. Per me il montaggio non è mettere in fila delle clip: è psicologia, ritmo e storytelling. Se gli spettatori se ne vanno dopo 3 secondi, il montatore non ha fatto il suo lavoro. Io faccio in modo che restino.",
    "about.p2": "Lavoro da remoto, con flessibilità totale. La comunicazione è fondamentale: parlo fluentemente tedesco e inglese e pratico attivamente l'italiano ogni giorno per migliorare le mie basi. Se cerchi un editor affidabile, che sa anticipare le esigenze e portare i tuoi contenuti al livello successivo, sei nel posto giusto.",
    "work.label": "01 / Lavori selezionati", "work.title": "Showcase", "work.long": "Long-form", "work.short": "Short-form · 9:16",
    "c1.p": "Profondità audio d'impatto, SFX stratificati e transizioni dinamiche che sostengono il montaggio.",
    "c2.p": "Correzione colore di alta qualità e sviluppo di look atmosferici.",
    "c3.p": "Montaggio di prova per un canale commentary / documentario — primi 6:45 min. Ritmo, B-roll e struttura pensata per la retention.",
    "c4.p": "Edit gaming comico con tagli a tempo, inserti meme ed effetti sonori.",
    "c5.p": "La stessa idea, condensata in uno short incisivo.",
    "c6.p": 'Highlight di gameplay veloce, pensato per i feed verticali. <a href="https://youtube.com/shorts/30ZMV6WoAm4" target="_blank" rel="noopener">Guarda su YouTube ↗</a>',
    "skills.label": "02 / Cosa faccio", "skills.title": "Competenze",
    "skill.01.title": "Full Post-Production (A–Z)", "skill.01.text": "Mi occupo dell'intero flusso di lavoro: dall'organizzazione del girato grezzo allo storytelling più curato, fino al video finito. Qualsiasi genere, qualsiasi formato: lo monto.",
    "skill.02.title": "Advanced Audio Engineering", "skill.02.text": "Effetti sonori (SFX) stratificati con precisione, editing musicale accurato e mixaggio professionale per una profondità audio che sostiene il montaggio.",
    "skill.03.title": "Color Grading & Look Dev", "skill.03.text": "Correzione colore professionale e sviluppo di look atmosferici in DaVinci Resolve per un'immagine coerente, cinematografica e di qualità premium.",
    "skill.04.title": "High-Retention Shorts", "skill.04.text": "Contenuti verticali ad alta energia per Shorts, Reels e TikTok: comicità a tempo, zoom incisivi, meme e sottotitoli animati su misura.",
    "skill.05.title": "Tactical Gaming Edits", "skill.05.text": "Highlight di shooter veloci, gameplay competitivi o format narrativi strutturati: conosco la cultura gaming e monto senza perdere il punto.",
    "skill.06.title": "Documentaries & Commentary", "skill.06.text": "Contenuti approfonditi costruiti su una struttura solida. Ritmo pulito, B-roll ragionato e un filo conduttore chiaro per documentari YouTube.",
    "skill.07.title": "Modern Vlogs & Lifestyle", "skill.07.text": "Tagli rapidi e invisibili che mantengono il flusso naturale. Seleziono i momenti migliori e costruisco un ritmo coinvolgente.",
    "skill.08.title": "Commercial & Real Estate", "skill.08.text": "Montaggi puliti, raffinati e accoglienti per brand, aziende e contenuti immobiliari, con un aspetto professionale fin dal primo fotogramma.",
    "skill.09.title": "Retention & Strategy Focus", "skill.09.text": "Non monto alla cieca. Hook strategici, pattern interrupt intelligenti e attenzione alle analytics di YouTube per aumentare il tempo di visualizzazione.",
    "certs.label": "03 / Qualifiche", "certs.title": "Certificati",
    "contact.label": "04 / Contatto",
    "contact.title": 'Creiamo qualcosa di <span class="accent">coinvolgente.</span>',
    "contact.p": "Disponibile per progetti long-form e short-form. Scrivimi un messaggio su Discord.",
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

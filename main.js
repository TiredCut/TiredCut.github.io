// Click-to-play video cards: shows a thumbnail first and only loads the player on click
document.querySelectorAll(".card[data-id]").forEach((card) => {
  const id = card.dataset.id;
  const yt = card.dataset.yt;
  const title = card.querySelector("h3").textContent;
  const player = card.querySelector(".player");

  const poster = document.createElement("button");
  poster.className = "poster";
  poster.type = "button";
  poster.setAttribute("aria-label", t("play") + title);
  poster.style.backgroundImage = `url(https://drive.google.com/thumbnail?id=${id}&sz=w1000)`;
  poster.innerHTML = '<span class="play"></span>';
  player.appendChild(poster);

  poster.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = yt
      ? `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`
      : `https://drive.google.com/file/d/${id}/preview`;
    iframe.title = title;
    iframe.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    player.replaceChildren(iframe);
  });
});

// Running timecode in the hero
const tc = document.getElementById("tc");
const start = performance.now();
const pad = (n) => String(n).padStart(2, "0");
(function tick() {
  const t = (performance.now() - start) / 1000;
  tc.textContent = `${pad(Math.floor(t / 3600))}:${pad(Math.floor(t / 60) % 60)}:${pad(Math.floor(t) % 60)}:${pad(Math.floor((t % 1) * 25))}`;
  requestAnimationFrame(tick);
})();

// Copy Discord handle
const discord = document.getElementById("discord");
const hint = document.getElementById("copyHint");
discord.addEventListener("click", async () => {
  window.open("https://discord.com/users/1460975125695434898", "_blank", "noopener");
  try {
    await navigator.clipboard.writeText("tired0844");
    hint.textContent = t("contact.copied");
  } catch {
    hint.textContent = t("contact.user");
  }
  setTimeout(() => (hint.textContent = t("contact.copy")), 2000);
});

document.getElementById("year").textContent = new Date().getFullYear();

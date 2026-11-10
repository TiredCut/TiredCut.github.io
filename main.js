// Click-to-play video cards: shows a thumbnail first and only loads the player on click
document.querySelectorAll(".card[data-id]").forEach((card) => {
  const id = card.dataset.id;
  const yt = card.dataset.yt;
  const title = card.querySelector("h3").textContent;
  const player = card.querySelector(".player");
  if (player instanceof HTMLVideoElement) return;

  const poster = document.createElement("button");
  poster.className = "poster";
  poster.type = "button";
  poster.setAttribute("aria-label", t("play") + title);
  const image = document.createElement("img");
  image.className = "poster-image";
  image.alt = "";
  image.decoding = "async";
  image.fetchPriority = "low";
  image.src = yt
    ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`
    : `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  if (yt) {
    image.addEventListener("error", () => {
      image.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    }, { once: true });
  }
  poster.append(image);
  const playIcon = document.createElement("span");
  playIcon.className = "play";
  poster.append(playIcon);
  player.appendChild(poster);

  poster.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = yt
      ? `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`
      : `https://drive.google.com/file/d/${id}/preview?autoplay=1`;
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
function tick() {
  const t = (performance.now() - start) / 1000;
  tc.textContent = `${pad(Math.floor(t / 3600))}:${pad(Math.floor(t / 60) % 60)}:${pad(Math.floor(t) % 60)}:${pad(Math.floor((t % 1) * 25))}`;
}
tick();
setInterval(tick, 100);

document.getElementById("year").textContent = new Date().getFullYear();

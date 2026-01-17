// MUSIC
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => music.play();

// HEART RAIN (Beat Synced)
const hearts = document.querySelector(".hearts");

function dropHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Drop hearts faster when music plays
music.addEventListener("play", () => {
  setInterval(dropHeart, 300); // beat-like rhythm
});

// COUNTDOWN (18 Jan 2026)
const birthday = new Date("2026-01-18T00:00:00");
setInterval(() => {
  const now = new Date();
  const diff = birthday - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${d} Days ${h}h ${m}m ${s}s`;
}, 1000);

// DAYS TOGETHER (18 Dec 2024, 1:20 AM)
const start = new Date("2024-12-18T01:20:00");
setInterval(() => {
  const now = new Date();
  const diff = now - start;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("togetherTime").innerText =
    `${d} Days ${h}h ${m}m ${s}s`;
}, 1000);

// TYPING LETTER
const text = `Hon ❤️

From the moment you came into my life,  
everything started to feel warmer,  
brighter and more meaningful.

Your smile is my favorite view,  
your laugh is my favorite sound,  
and your love is my favorite feeling.

Happy Birthday my love 🎂💖  
Forever yours.`;

let i = 0;
setInterval(() => {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
  }
}, 45);

// SLIDESHOW (Beat-Synced Speed)
const images = document.querySelectorAll(".slideshow img");
let index = 0;

music.addEventListener("play", () => {
  setInterval(() => {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
    index = (index + 1) % images.length;
  }, 2500); // sync feel with song
});

// NIGHT MODE
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("night");
};  document.body.classList.toggle("night");
}

/* HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);

/* FIREWORKS */
function fireworks() {
  const f = document.createElement("div");
  f.innerHTML = "🎆";
  f.style.position = "fixed";
  f.style.left = Math.random() * 100 + "vw";
  f.style.top = Math.random() * 50 + "vh";
  f.style.fontSize = "30px";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1500);
}
setInterval(fireworks, 2500);

/* SLIDESHOW */
let photos = document.querySelectorAll(".photo");
let index = 0;

setInterval(() => {
  if (!photos.length) return;
  photos[index].classList.remove("active");
  index = (index + 1) % photos.length;
  photos[index].classList.add("active");
}, 3000);

/* AUTO ZOOM */
photos.forEach(photo => {
  photo.querySelector("img").addEventListener("click", () => {
    photo.classList.toggle("zoom");
  });
});

/* DAYS TOGETHER */
const together = document.getElementById("together");

if (together) {
  const start = new Date("December 18, 2025 01:20:00");

  setInterval(() => {
    const diff = new Date() - start;

    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    together.innerHTML = `Together for<br>${d}d ${h}h ${m}m ${s}s 💖`;
  }, 1000);
}

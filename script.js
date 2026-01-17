// 🎵 MUSIC AUTOPLAY
const music = document.getElementById("bgMusic");

function startMusic() {
  music.play().catch(() => {
    document.body.addEventListener("click", () => music.play(), { once: true });
  });
}

// 🔓 BIRTHDAY UNLOCK
const birthday = new Date("2025-01-18T00:00:00");

const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const lockMsg = document.getElementById("lockMsg");
const forceBtn = document.getElementById("forceOpen");

function checkBirthday() {
  const now = new Date();

  if (now >= birthday) {
    unlockSite();
  } else {
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    lockMsg.textContent = `Only ${days} days left, hon 💕`;
  }
}

function unlockSite() {
  lockScreen.style.display = "none";
  mainSite.style.display = "block";
  startMusic();
  startTyping();
}

forceBtn.addEventListener("click", unlockSite);
checkBirthday();

// 💞 DAYS TOGETHER COUNTER
const startDate = new Date("2024-12-18T01:20:00");

function updateDaysTogether() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("daysTogether").textContent =
    `${days} days ${hours}h ${mins}m ${secs}s ❤️`;
}

setInterval(updateDaysTogether, 1000);
updateDaysTogether();

// ⏳ BIRTHDAY COUNTDOWN
function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "🎉 IT'S YOUR BIRTHDAY HON 💖";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${d} days ${h}h ${m}m ${s}s 🎂`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🖋️ TYPING LOVE LETTER
const letter = `Dear hon ❤️

From the moment you came into my life,
everything felt warmer, brighter, and more meaningful.

Your smile is my favorite view,
your laugh is my favorite sound,
and your love is my favorite feeling.

Happy Birthday my love 💖
Forever yours,
Richu`;

let i = 0;
const typingEl = document.getElementById("typing");

function startTyping() {
  if (i < letter.length) {
    typingEl.textContent += letter.charAt(i);
    i++;
    setTimeout(startTyping, 50);
  }
}

// 💗 HEART RAIN
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

// 🌙 NIGHT MODE
const nightBtn = document.getElementById("nightBtn");

nightBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
});

// Auto night mode
const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
  document.body.classList.add("night");
}

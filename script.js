const music = document.getElementById("bgMusic");
const lock = document.getElementById("lockScreen");
const main = document.getElementById("mainSite");
const passInput = document.getElementById("passwordInput");

const birthday = new Date("2026-01-18T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) unlock();

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("countdownText").innerText =
    `Unlocks in ${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

document.getElementById("unlockBtn").onclick = () => {
  if (passInput.value === "hon123") unlock();
};

function unlock() {
  lock.style.display = "none";
  main.classList.remove("hidden");
  music.play();
  startTyping();
  startHearts();
}

// Typing
const text = "Happy Birthday my love ❤️ You make my world brighter every day...";
let i = 0;
function startTyping() {
  const t = document.getElementById("typingText");
  const timer = setInterval(() => {
    t.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 80);
}

// Days together
const startDate = new Date("2024-12-18T01:20:00");
setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / 86400000);
  document.getElementById("daysTogether").innerText = `${days} days ❤️`;
}, 1000);

// Hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "6s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

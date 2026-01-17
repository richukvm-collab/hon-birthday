const tapScreen = document.getElementById("tapScreen");
const music = document.getElementById("bgMusic");

tapScreen.addEventListener("click", () => {
  music.play();
  tapScreen.style.display = "none";
});

// Hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

// Days Together (from 18 Dec 2024)
const startDate = new Date("2024-12-18");

function updateDays() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent = diff + " days ❤️";
}
updateDays();

// Birthday Countdown (18 Jan)
const birthday = new Date(new Date().getFullYear(), 0, 18);

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Happy Birthday 🎉";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const tapScreen = document.getElementById("tapScreen");
const music = document.getElementById("bgMusic");

tapScreen.addEventListener("click", () => {
  music.play();
  tapScreen.style.display = "none";
});

// Night Mode
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// Beat Hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 10) + "px";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 350);

// Floating Quotes
const quotes = [
  "I choose you, always 💕",
  "My heart belongs to you ❤️",
  "You are my forever 💖",
  "With you, life is beautiful 🌸"
];

setInterval(() => {
  document.getElementById("quotes").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}, 4000);

// Days Together
const startDate = new Date("2024-12-18");
function updateDays() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / 86400000);
  document.getElementById("daysTogether").textContent = diff + " days ❤️";
}
updateDays();

// Countdown
const birthday = new Date(new Date().getFullYear(), 0, 18);
function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;
  if (diff <= 0) return document.getElementById("countdown").textContent = "Happy Birthday 🎉";
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  document.getElementById("countdown").textContent = `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

// Typewriter Love Letter
const text = `
I love you for the way you understand me without me speaking.
I love how your presence makes everything feel lighter.
I love how your smile feels like home.
I love how you turn ordinary moments into beautiful memories.
I love you today, tomorrow, and forever.
`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

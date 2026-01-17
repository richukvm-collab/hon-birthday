const music = document.getElementById("bgMusic");
const startDate = new Date("2024-12-18T01:20:00");
const birthday = new Date("2026-01-18T00:00:00");

// Auto music on scroll (mobile safe)
window.addEventListener("scroll", () => {
  if (music.paused) music.play();
}, { once: true });

// Typing Love Letter
const letter = `Dear Hon ❤️

You are my favorite person.
My peace. My happiness. My forever.

Happy Birthday my love 💖`;

let i = 0;
function typeText() {
  if (i < letter.length) {
    document.getElementById("typing").textContent += letter[i++];
    setTimeout(typeText, 60);
  }
}
typeText();

// Days Together Counter
setInterval(() => {
  const diff = new Date() - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("daysTogether").textContent =
    `${days} days together ❤️`;
}, 1000);

// Birthday Countdown
setInterval(() => {
  const diff = birthday - new Date();
  if (diff > 0) {
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor(diff / (1000*60*60)) % 24;
    const m = Math.floor(diff / (1000*60)) % 60;
    const s = Math.floor(diff / 1000) % 60;
    document.getElementById("countdown").textContent =
      `${d}d ${h}h ${m}m ${s}s`;
  }
}, 1000);

// Photo Slideshow
let photoIndex = 1;
setInterval(() => {
  photoIndex = photoIndex % 12 + 1;
  document.getElementById("photoSlide").src = `img/img${photoIndex}.jpg`;
}, 4000);

// Video Slideshow
const videos = ["v1.mp4","v2.mp4","v3.mp4","v4.mp4","v5.mp4"];
let vIndex = 0;
const video = document.getElementById("videoSlide");
video.src = "img/" + videos[0];

setInterval(() => {
  vIndex = (vIndex + 1) % videos.length;
  video.style.opacity = 0;
  setTimeout(() => {
    video.src = "img/" + videos[vIndex];
    video.style.opacity = 1;
  }, 800);
}, 8000);

// Beat-synced Heart Rain
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (Math.random()*16 + 10) + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 350);

// Night Mode
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("night");
};

// Auto night mode
const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
  document.body.classList.add("night");
}

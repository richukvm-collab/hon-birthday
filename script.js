const music = document.getElementById("bgMusic");
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");

const birthday = new Date("2026-01-18T00:00:00");
const startDate = new Date("2024-12-18T01:20:00");

function updateLockCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    unlockSite();
  } else {
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor(diff / (1000*60*60)) % 24;
    const m = Math.floor(diff / (1000*60)) % 60;
    document.getElementById("countdownText").textContent =
      `Opens in ${d}d ${h}h ${m}m`;
  }
}
setInterval(updateLockCountdown, 1000);

document.getElementById("unlockBtn").onclick = () => {
  if (document.getElementById("passwordInput").value === "hon123") {
    unlockSite();
  }
};

function unlockSite() {
  lockScreen.style.display = "none";
  mainSite.style.display = "block";
  music.play();
  typeText();
  startSlides();
  startVideos();
  createHearts();
}

// Typing love letter
const letter = `Dear Hon ❤️

From the moment you came into my life, everything became brighter.

You are my safe place, my happiness, my forever.

Happy Birthday my love 💖`;

let i = 0;
function typeText() {
  if (i < letter.length) {
    document.getElementById("typing").textContent += letter[i];
    i++;
    setTimeout(typeText, 60);
  }
}

// Days together
function updateDays() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("daysTogether").textContent = `${days} days ❤️`;
}
setInterval(updateDays, 1000);

// Birthday countdown
function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;
  if (diff > 0) {
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor(diff / (1000*60*60)) % 24;
    const m = Math.floor(diff / (1000*60)) % 60;
    const s = Math.floor(diff / 1000) % 60;
    document.getElementById("countdown").textContent =
      `${d}d ${h}h ${m}m ${s}s`;
  }
}
setInterval(updateCountdown, 1000);

// Photo slideshow
let photoIndex = 1;
function startSlides() {
  setInterval(() => {
    photoIndex = photoIndex % 12 + 1;
    document.getElementById("photoSlide").src = `img/img${photoIndex}.jpg`;
  }, 4000);
}

// Video slideshow
const videos = ["v1.mp4","v2.mp4","v3.mp4","v4.mp4","v5.mp4"];
let vIndex = 0;
function startVideos() {
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
}

// Hearts rain
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random()*20 + 10) + "px";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 300);
}

// Night mode
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("night");
};

// Auto night mode
const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
  document.body.classList.add("night");
}

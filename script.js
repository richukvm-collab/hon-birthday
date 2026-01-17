const music = document.getElementById("bgMusic");
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");

const birthday = new Date("2026-01-18T00:00:00");
const startDate = new Date("2024-12-18T01:20:00");

function unlockSite() {
  lockScreen.style.display = "none";
  mainSite.style.display = "block";
  music.play();
  typeText();
  startSlides();
  startVideos();
  startHearts();
}

document.getElementById("passwordInput").addEventListener("input", e => {
  if (e.target.value === "hon123") unlockSite();
});

function updateLockCountdown() {
  const diff = birthday - new Date();
  if (diff <= 0) unlockSite();
  else {
    const d = Math.floor(diff / (1000*60*60*24));
    document.getElementById("countdownText").textContent =
      `Opens in ${d} days 💖`;
  }
}
setInterval(updateLockCountdown, 1000);

// Typing Letter
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

// Days Together
setInterval(() => {
  const diff = new Date() - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("daysTogether").textContent =
    `${days} days together ❤️`;
}, 1000);

// Countdown
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
function startSlides() {
  setInterval(() => {
    photoIndex = photoIndex % 12 + 1;
    document.getElementById("photoSlide").src = `img/img${photoIndex}.jpg`;
  }, 4000);
}

// Video Slideshow
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

// Beat-Synced Heart Rain
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*16 + 10) + "px";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 350); // synced to music tempo
}

// Night Mode
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("night");
};

const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
  document.body.classList.add("night");
}

// Auto music on scroll
window.addEventListener("scroll", () => {
  if (music.paused) music.play();
}, { once: true });

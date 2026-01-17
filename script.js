const music = document.getElementById("bgMusic");

// Auto night mode
const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) {
  document.body.classList.add("night");
}

// Manual night toggle
document.getElementById("nightToggle").onclick = () => {
  document.body.classList.toggle("night");
};

// Birthday unlock
const birthday = new Date("2026-01-18T00:00:00");
const now = new Date();

const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const lockMsg = document.getElementById("lockMsg");

if (now >= birthday) {
  lockScreen.style.display = "none";
  mainSite.style.display = "block";
} else {
  const diff = birthday - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  lockMsg.innerText = `Opens in ${d} days ${h}h ${m}m 💖`;
}

document.getElementById("forceOpen").onclick = () => {
  lockScreen.style.display = "none";
  mainSite.style.display = "block";
  music.play();
};

// Auto-play on scroll
let started = false;
window.addEventListener("scroll", () => {
  if (!started) {
    music.play();
    started = true;
  }
});

// Heart rain
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Typing love letter
const text = `Hon ❤️

From the moment you came into my life,  
everything became warmer,  
brighter and more meaningful.

Your smile is my favorite view,  
your laugh is my favorite sound,  
and your love is my favorite feeling.

Happy Birthday my love 🎂💖`;

let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 90);
  }
}
typeText();

// Days together
const startDate = new Date("2024-12-18T01:20:00");
setInterval(() => {
  const diff = new Date() - startDate;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("daysTogether").innerText =
    `${d} days ${h}h ${m}m ${s}s 💞`;
}, 1000);

// Countdown
setInterval(() => {
  const diff = birthday - new Date();
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// Photo slideshow
let imgIndex = 1;
setInterval(() => {
  imgIndex++;
  if (imgIndex > 12) imgIndex = 1;
  document.getElementById("slideImg").src = `img/img${imgIndex}.jpg`;
}, 4000);

// Video slideshow with fade
const videos = [
  "img/video1.mp4",
  "img/video2.mp4",
  "img/video3.mp4",
  "img/video4.mp4",
  "img/video5.mp4"
];

let vIndex = 0;
const videoPlayer = document.getElementById("videoSlide");

function nextVideo() {
  videoPlayer.style.opacity = 0;
  setTimeout(() => {
    videoPlayer.src = videos[vIndex];
    videoPlayer.play();
    videoPlayer.style.opacity = 1;
    vIndex = (vIndex + 1) % videos.length;
  }, 800);
}

videoPlayer.addEventListener("ended", nextVideo);
nextVideo();  const diff = bday - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

// Photo slideshow
let imgIndex = 1;
setInterval(() => {
  imgIndex++;
  if (imgIndex > 12) imgIndex = 1;
  document.getElementById("slideImg").src = `img/img${imgIndex}.jpg`;
}, 4000);

// Video slideshow
const videos = [
  "img/video1.mp4",
  "img/video2.mp4",
  "img/video3.mp4",
  "img/video4.mp4",
  "img/video5.mp4"
];

let vIndex = 0;
const videoPlayer = document.getElementById("videoSlide");

function nextVideo() {
  videoPlayer.src = videos[vIndex];
  videoPlayer.play();
  vIndex = (vIndex + 1) % videos.length;
}

videoPlayer.addEventListener("ended", nextVideo);
nextVideo();  if (i < text.length) {
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

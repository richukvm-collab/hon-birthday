const music = document.getElementById("bgMusic");
const text = "From the moment you came into my life, everything became warmer, brighter and more meaningful 💖";
const typing = document.getElementById("typing");

let i = 0;

// Auto play music
document.body.addEventListener("click", () => {
  music.play();
});

// Typing effect synced to beat
function typeText() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 120);
  }
}
typeText();

// Days together counter
const startDate = new Date("2024-12-18T01:20:00");
function updateDays() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").innerText =
    `${days} days 💞`;
}
updateDays();

// Birthday countdown (18 Jan)
const bday = new Date("2026-01-18T00:00:00");
function updateCountdown() {
  const now = new Date();
  const diff = bday - now;

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

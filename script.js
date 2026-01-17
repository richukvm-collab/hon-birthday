/* PASSWORD + COUNTDOWN */
const countdown = document.getElementById("countdown");
const unlockBox = document.getElementById("unlockBox");

const birthday = new Date("January 18, 2026 00:00:00").getTime();

setInterval(() => {
  if (!countdown) return;

  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    countdown.innerHTML = "Happy Birthday, Hon 🎂💖";
    unlockBox.style.display = "block";
  } else {
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `Opens in<br>${d}d ${h}h ${m}m ${s}s 💖`;
  }
}, 1000);

function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "hon123") {
    unlockBox.style.display = "block";
  } else {
    alert("Wrong password 😜");
  }
}

/* NIGHT MODE */
function toggleNight() {
  document.body.classList.toggle("night");
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

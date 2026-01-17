const music = document.getElementById("bgMusic");

function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "hon123") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    music.play();
    startHearts();
    startConfetti();
  } else {
    alert("Wrong password 💔");
  }
}

const text = "Happy Birthday my love 💖 This is just for you...";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}
typeText();

/* Countdown */
const birthday = new Date("Jan 18, 2026 00:00:00");
setInterval(() => {
  const now = new Date();
  const diff = birthday - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* Days Together */
const start = new Date("Dec 18, 2024 01:20:00");
setInterval(() => {
  const now = new Date();
  const days = Math.floor((now - start) / (1000*60*60*24));
  document.getElementById("daysTogether").innerText = `${days} days ❤️`;
}, 1000);

/* Beat Synced Hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = "4s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300); 
}

/* Confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 300;

  const pieces = Array.from({length:100}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    speed: Math.random()*3+1
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#ff4d6d";
    pieces.forEach(p => {
      ctx.fillRect(p.x,p.y,5,5);
      p.y += p.speed;
      if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

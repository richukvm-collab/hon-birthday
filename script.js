const music = document.getElementById("bgMusic");

function startMusic() {
  music.play();
  document.querySelector(".tapToPlay").style.display = "none";
  startTyping();
  startHearts();
}

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

const startDate = new Date("2024-12-18T01:20:00");

setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / 86400000);
  document.getElementById("daysTogether").innerText = `${days} days ❤️`;
}, 1000);

// Beat-synced hearts (faster = feels like beat)
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = "4s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 250);
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

const tapScreen = document.getElementById("tapScreen");
const music = document.getElementById("bgMusic");

tapScreen.addEventListener("click", () => {
  music.play();
  tapScreen.style.display = "none";
  launchConfetti();
});

// Floating Hearts (Beat-synced style)
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = (14 + Math.random() * 12) + "px";
  heart.style.animation = "rise 4s linear";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);

// Confetti Ending
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("span");
    c.innerHTML = "🎉";
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    c.style.animation = "confettiFall 4s linear";
    document.getElementById("confetti").appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// Animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes rise {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}
@keyframes confettiFall {
  from { transform: translateY(0); }
  to { transform: translateY(100vh); }
}
`;
document.head.appendChild(style);

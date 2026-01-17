const tapScreen = document.getElementById("tapScreen");
const music = document.getElementById("bgMusic");

tapScreen.addEventListener("click", () => {
  music.play();
  tapScreen.style.display = "none";
  launchConfetti();
});

// Night Mode
document.getElementById("nightBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// Hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 12) + "px";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Confetti
function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("span");
    c.innerHTML = "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = (14 + Math.random() * 10) + "px";
    c.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.getElementById("confetti").appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

// Typewriter
const text = `
I love you for the way you care about me.
I love how your smile lights up my world.
I love how your voice feels like home.
I love the way you make life beautiful.
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

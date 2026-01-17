const tapScreen = document.getElementById("tapScreen");
const music = document.getElementById("bgMusic");

tapScreen.addEventListener("click", () => {
  music.play();
  tapScreen.style.display = "none";
  launchConfetti();
});

// Hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 12) + "px";
  heart.style.animation = "fall 5s linear";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Confetti
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("span");
    c.innerHTML = "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animation = "confettiFall 4s linear";
    document.getElementById("confetti").appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// Typewriter
const text = `
I love the way you care about me.
I love your beautiful smile.
I love how you make life magical.
I love you more every single day.
Forever and always, it's you.
`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

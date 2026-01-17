// COUNTDOWN TO 18TH JAN
const countdown = document.getElementById("countdown");
const unlock = document.getElementById("unlock");

const birthday = new Date("January 18, 2026 00:00:00").getTime();

setInterval(() => {
  if (!countdown) return;

  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    countdown.innerHTML = "Happy Birthday, Hon 🎂💖";
    unlock.style.display = "block";
  } else {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `Opening in<br>${d}d ${h}h ${m}m ${s}s 💖`;
  }
}, 1000);

// PASSWORD UNLOCK
function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "hon123") {
    unlock.style.display = "block";
  } else {
    alert("Wrong password 😅 Try again!");
  }
}

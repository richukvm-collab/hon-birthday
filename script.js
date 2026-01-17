function startSurprise() {
  document.getElementById("tapScreen").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play().catch(err => console.log("Music blocked:", err));
}

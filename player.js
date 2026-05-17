const audio = document.getElementById("audio");
const avatarBtn = document.getElementById("avatarBtn");

function setPlaying(playing) {
  avatarBtn.classList.toggle("is-playing", playing);
  avatarBtn.setAttribute("aria-label", playing ? "Пауза" : "Воспроизвести музыку");
}

function togglePlayback() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

avatarBtn.addEventListener("click", togglePlayback);

avatarBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    togglePlayback();
  }
});

audio.addEventListener("play", () => setPlaying(true));
audio.addEventListener("pause", () => setPlaying(false));
audio.addEventListener("ended", () => setPlaying(false));

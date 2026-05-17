const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

function setPlaying(playing) {
  playBtn.classList.toggle("is-playing", playing);
  playBtn.setAttribute("aria-label", playing ? "Пауза" : "Воспроизвести");
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => setPlaying(true));
audio.addEventListener("pause", () => setPlaying(false));
audio.addEventListener("ended", () => setPlaying(false));

/* Created by Tivotal */

const wrapper = document.querySelector(".wrapper");
const isPlay = false;
let audio = new Audio("Adigaa1.mp3");
wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  if (audio.paused) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
});

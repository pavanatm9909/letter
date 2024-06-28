/* Created by Tivotal */

const wrapper = document.querySelector(".wrapper");
const isPlay = false;
var audio = document.getElementById('song');
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

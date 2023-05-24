const sr = ScrollReveal({
    distance: "50px",
    duration: 3000,
    delay: 500,
    reset: false
  });


sr.reveal("header", { delay: 150, origin: "top" });
sr.reveal(".parent1", { delay: 150, origin: "top" });
sr.reveal(".parent2", { delay: 150, origin: "top" });


const saymyname = document.querySelector(".parent2");
let lastClickTime = 0;

saymyname.onclick = () => {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - lastClickTime;

  if (elapsedTime >= 10000) {
    function playSound(audioName) {
      let audio = new Audio(audioName);
      audio.loop = false;
      audio.play();
    }
    playSound("audio/heisenbergaudio.mp3");
  }
}
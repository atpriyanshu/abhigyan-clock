const clock = document.getElementById("clock");

setInterval(() => {
  const time = new Date();
  clock.textContent = time;
}, 1);
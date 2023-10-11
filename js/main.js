function displayTime() {
  const timeDisplay = document.getElementById("time-display");

  const now = new Date();

  const currentDateTime = now.toLocaleTimeString();

  timeDisplay.textContent = currentDateTime;
}

setInterval(displayTime, 1000);

/* ==========================================================
   Ada the Arctic Ferret - interactivity
   This file runs in the visitor's BROWSER (not inside Docker).
   It handles button clicks, Ada's message, and the snow.
   ========================================================== */

// ----------------------------------------------------------
// OPTIONAL WORKSHOP EXTENSION:
// Change the text below, rebuild your Docker image with a new
// tag, and run it to see your change appear in the browser!
// ----------------------------------------------------------
const ADA_MESSAGE = "Hey there! You just learned how to run an app through a Docker container!";

// Fun things Ada says after getting treats.
const TREAT_MESSAGES = [
  "Yum! Thank you!",
  "Nom nom nom... more please!",
  "Best container ever!",
  "Ferrets love treats AND containers!",
  "I'm doing a happy dance!",
];

// ---------- Grab the page elements we need ----------
const welcomeScreen = document.getElementById("welcome-screen");
const adaScreen = document.getElementById("ada-screen");
const startButton = document.getElementById("start-button");
const treatButton = document.getElementById("treat-button");
const resetButton = document.getElementById("reset-button");
const adaMessage = document.getElementById("ada-message");
const treatCount = document.getElementById("treat-count");
const adaWrapper = document.getElementById("ada-wrapper");

let treats = 0;

// ---------- Show Ada when the first button is clicked ----------
startButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  adaScreen.classList.remove("hidden");
  adaMessage.textContent = ADA_MESSAGE;
});

// ---------- Give Ada a treat ----------
treatButton.addEventListener("click", () => {
  treats += 1;
  treatCount.textContent = treats;

  // Pick a random message from the list
  const index = Math.floor(Math.random() * TREAT_MESSAGES.length);
  adaMessage.textContent = TREAT_MESSAGES[index];

  bounceAda();
  floatTreat();
});

// ---------- Start over ----------
resetButton.addEventListener("click", () => {
  treats = 0;
  treatCount.textContent = treats;
  adaScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
});

// ---------- Small animation helpers ----------

// Makes Ada bounce by adding a CSS class, then removing it so it can replay.
function bounceAda() {
  adaWrapper.classList.remove("bounce");
  // Reading offsetWidth forces the browser to "reset" the animation.
  void adaWrapper.offsetWidth;
  adaWrapper.classList.add("bounce");
}

// Creates a treat emoji that floats up from the treat button, then removes it.
function floatTreat() {
  const rect = treatButton.getBoundingClientRect();
  const treat = document.createElement("span");
  treat.className = "floating-treat";
  treat.textContent = "🍓";
  treat.style.left = rect.left + rect.width / 2 + "px";
  treat.style.top = rect.top + "px";
  document.body.appendChild(treat);
  setTimeout(() => treat.remove(), 1200);
}

// ---------- Falling snow background ----------
function createSnow(flakeCount) {
  const snowContainer = document.getElementById("snow");
  for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = "❄";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = 10 + Math.random() * 16 + "px";
    flake.style.animationDuration = 6 + Math.random() * 8 + "s";
    flake.style.animationDelay = -Math.random() * 10 + "s"; // negative = already mid-fall
    snowContainer.appendChild(flake);
  }
}

createSnow(30);

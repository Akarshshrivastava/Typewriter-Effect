const app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  strings: ["Developer", "Designer", "Photographer", "Crypto Enthusiast"],
  autoStart: true,
  loop: true,
  delay: 60,
  pauseFor: 1000,
});

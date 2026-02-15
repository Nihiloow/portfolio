document.addEventListener("DOMContentLoaded", () => {
  console.log("Le thème Yamada est prêt !");

  // Optionnel : Un petit effet de parallaxe très léger sur le background ou les titres
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero h1");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      hero.style.opacity = 1 - scrolled / 600;
    }
  });
});

window.addEventListener("load", () => {
  // Animation aléatoire pour chaque blob
  function moveBlob(selector) {
    gsap.to(selector, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  moveBlob(".blob-1");
  moveBlob(".blob-2");
  moveBlob(".blob-3");
});

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

document.addEventListener("DOMContentLoaded", () => {
  console.log("Le thème est prêt !");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero h1");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      hero.style.opacity = 1 - scrolled / 600;
    }
  });
});

const canvas = document.getElementById("water-canvas");
const ctx = canvas.getContext("2d");

let ripples = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
  );
}

window.addEventListener("resize", resize);

window.addEventListener("load", resize);
resize();

window.addEventListener("click", (e) => {
  const scrollY = window.scrollY || window.pageYOffset;

  ripples.push({
    x: e.clientX,
    y: e.clientY + scrollY,
    radius: 0,
    opacity: 1,
    startTime: Date.now(),
  });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const now = Date.now();

  ripples.forEach((ripple, index) => {
    const elapsed = now - ripple.startTime;
    const duration = 3000;

    if (elapsed > duration) {
      ripples.splice(index, 1);
      return;
    }

    const progress = elapsed / duration;

    ripple.radius = progress * 200;
    ripple.opacity = 1 - progress;

    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
    ctx.lineWidth = 3 * (1 - progress);
    ctx.stroke();
  });

  requestAnimationFrame(animate);
}

animate();

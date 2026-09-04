const concepts = ["brutal", "gallery", "archive", "night", "sumi", "gravure"];
const labels = {
  brutal: "Brutalismo de ateliê",
  gallery: "Galeria rubi",
  archive: "Arquivo orgânico",
  night: "Noite viva",
  sumi: "Fluxo Sumi",
  gravure: "Gravura carmim"
};

const requested = new URLSearchParams(window.location.search).get("conceito");
const captureMode = new URLSearchParams(window.location.search).get("captura") === "1";
const active = concepts.includes(requested) ? requested : concepts[0];
const activeIndex = concepts.indexOf(active);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.dataset.concept = active;
document.title = `${labels[active]} | Ítala Sarah Tattoo`;

document.querySelectorAll("[data-concept]").forEach((site) => {
  site.hidden = site.dataset.concept !== active;
});

const currentNumber = document.querySelector("[data-current-number]");
const previous = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
const previousConcept = concepts[(activeIndex - 1 + concepts.length) % concepts.length];
const nextConcept = concepts[(activeIndex + 1) % concepts.length];

if (currentNumber) currentNumber.textContent = String(activeIndex + 1).padStart(2, "0");
if (previous) previous.href = `preview.html?conceito=${previousConcept}`;
if (next) next.href = `preview.html?conceito=${nextConcept}`;

const activeSite = document.querySelector(`[data-concept="${active}"]`);
const revealItems = activeSite ? activeSite.querySelectorAll(".reveal") : [];

if (reducedMotion || captureMode || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -6%" });
  revealItems.forEach((item) => observer.observe(item));
}

const conceptVideo = activeSite?.querySelector("[data-concept-video]");
if (conceptVideo && !reducedMotion) {
  const source = conceptVideo.querySelector("source[data-src]");
  if (source) {
    source.src = source.dataset.src;
    conceptVideo.load();
    conceptVideo.play().catch(() => {});
  }
}

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  activeSite?.querySelectorAll("[data-pointer-field]").forEach((field) => {
    field.addEventListener("pointermove", (event) => {
      const bounds = field.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      field.style.setProperty("--pointer-x", x.toFixed(3));
      field.style.setProperty("--pointer-y", y.toFixed(3));
    });
    field.addEventListener("pointerleave", () => {
      field.style.setProperty("--pointer-x", "0");
      field.style.setProperty("--pointer-y", "0");
    });
  });
}

document.addEventListener("visibilitychange", () => {
  if (!conceptVideo) return;
  if (document.hidden) conceptVideo.pause();
});

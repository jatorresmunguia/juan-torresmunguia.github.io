document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.quarto-grid-link").forEach(el => {
    el.removeAttribute("target");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circles .circle");
  const previews = document.querySelectorAll(".hero_preview");

  function showPreview(index) {
    previews.forEach((img, i) => {
      img.classList.toggle("visible", i === index);
    });
  }

  // Start with the first image
  let currentIndex = 0;
  showPreview(currentIndex);

  circles.forEach((circle, index) => {
    circle.addEventListener("mouseenter", () => {
      currentIndex = index;
      showPreview(index);
    });
  });
});
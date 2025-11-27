const btn = document.getElementById("show-cv-btn");
const cv = document.getElementById("cv-content");

btn.addEventListener("click", () => {
  cv.classList.toggle("hidden");
});

const headerBox = document.querySelector(".header-box");
const toggleBtn = document.querySelector(".btn-mobile-nav");

toggleBtn.addEventListener("click", () => {
  headerBox.classList.toggle("nav-open");
});

const headerBox = document.querySelector(".header-box");
const toggleBtn = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".nav-list");
const sectionFeature = document.querySelector(".section-features");
const header = document.querySelector(".header");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".cta");
// console.log(btnsOpenModal);

// MOBILE NAVIGATION
toggleBtn.addEventListener("click", () => {
  headerBox.classList.toggle("nav-open");
});

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link"))
    headerBox.classList.remove("nav-open");
});

// MODAL
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((cta) => cta.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

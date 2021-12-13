const hamburgerBtn = document.querySelector(".header-hamburger-menu");
const closeBtn = document.querySelector(".header-close-menu");
const headerMenu = document.querySelector(".header-nav-menu");

hamburgerBtn.addEventListener("click", () => {
  headerMenu.style.display = "flex";
  closeBtn.style.display = "block";
  hamburgerBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  headerMenu.style.display = "none";
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "block";
});

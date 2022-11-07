const menuToogleButton = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileNavigationContainer = document.querySelector(
  ".mobile-nav-container"
);
const menuIcon = document.querySelector(".hamburger-icon");
const mobileNavigation = document.querySelector(".mobile-navigation");

menuToogleButton.addEventListener("click", () => {
  menuToogleButton.style.display = "none";
  closeMenuBtn.style.display = "block";
  mobileNavigationContainer.style.display = "block";
  mobileNavigation.style.display = "flex";
  menuIcon.style.color = "white";
});

closeMenuBtn.addEventListener("click", () => {
  // let width =
  //   window.innerWidth /
  //   parseFloat(getComputedStyle(document.querySelector("body"))["font-size"]);
  menuToogleButton.style.display = "block";
  closeMenuBtn.style.display = "none";
  mobileNavigationContainer.style.display = "none";
  mobileNavigation.style.display = "none";
  menuIcon.style.color = "black";
});

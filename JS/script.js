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
  menuIcon.style.position = "fixed";
});

closeMenuBtn.addEventListener("click", () => {
  menuToogleButton.style.display = "block";
  closeMenuBtn.style.display = "none";
  mobileNavigationContainer.style.display = "none";
  mobileNavigation.style.display = "none";
  if (document.body.classList.contains("dark-theme")) {
    menuIcon.style.color = "white";
    menuIcon.style.position = "fixed";
  } else {
    menuIcon.style.color = "black";
    menuIcon.style.position = "fixed";
  }
});

let mobileIcon = document.getElementById("toggle-mode-mobile");
let mobileNavItem = document.querySelectorAll(".mobile-nav-item");

mobileNavItem.forEach(function (mobileNavItems) {
  mobileNavItems.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    menuToogleButton.style.display = "block";
    closeMenuBtn.style.display = "none";
    mobileNavigationContainer.style.display = "none";
    mobileNavigation.style.display = "none";
    if (document.body.classList.contains("dark-theme")) {
      menuIcon.style.color = "white";
      menuIcon.style.position = "fixed";
    } else {
      menuIcon.style.color = "black";
      menuIcon.style.position = "fixed";
    }
    if (document.body.classList.contains("dark-theme")) {
      toggleText.innerHTML = "Light Mode";
      mobileIcon.classList.remove("fa-moon");
      mobileIcon.classList.add("fa-sun");
      homeImage.src = "IMG/home-white-bg.png";
      $(".card").css("boxShadow", "none");
    } else {
      toggleText.innerHTML = "Dark Mode";
      mobileIcon.classList.remove("fa-sun");
      mobileIcon.classList.add("fa-moon");
      homeImage.src = "IMG/new-bg.png";
      // $(".card").css(
      //   "boxShadow",
      //   "0.6em 0.6em 1.2em #d2dcef, -0.5em -0.5em 1em #ffffff"
      // );
    }
  });
});

mobileIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  menuToogleButton.style.display = "block";
  closeMenuBtn.style.display = "none";
  mobileNavigationContainer.style.display = "none";
  mobileNavigation.style.display = "none";
  if (document.body.classList.contains("dark-theme")) {
    menuIcon.style.color = "white";
    menuIcon.style.position = "fixed";
  } else {
    menuIcon.style.color = "black";
    menuIcon.style.position = "fixed";
  }
  if (document.body.classList.contains("dark-theme")) {
    toggleText.innerHTML = "Light Mode";
    mobileIcon.classList.remove("fa-moon");
    mobileIcon.classList.add("fa-sun");
    homeImage.src = "IMG/home-white-bg.png";
    $(".card").css("boxShadow", "none");
  } else {
    toggleText.innerHTML = "Dark Mode";
    mobileIcon.classList.remove("fa-sun");
    mobileIcon.classList.add("fa-moon");
    homeImage.src = "IMG/new-bg.png";
    // $(".card").css(
    //   "boxShadow",
    //   "0.6em 0.6em 1.2em #d2dcef, -0.5em -0.5em 1em #ffffff"
    // );
  }
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

// apertura / chiusura menu
if (menuToggle) {

  menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    body.classList.toggle("menu-open");

  });

}

// chiusura cliccando fuori
document.addEventListener("click", (e) => {

  const isMenuOpen = body.classList.contains("menu-open");

  if (!isMenuOpen) return;

  const clickedInsideMenu = mobileMenu.contains(e.target);
  const clickedToggle = menuToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {

    body.classList.remove("menu-open");

  }

});

// chiusura cliccando link
document.querySelectorAll(".mobile-link").forEach(link => {

  link.addEventListener("click", () => {

    body.classList.remove("menu-open");

  });

});
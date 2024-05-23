document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const toggleDarkModeButton = document.getElementById("toggleDarkMode");

      toggleDarkModeButton.addEventListener("click", function () {
        // Ajoute ou supprime la classe "dark-mode" du body
        document.body.classList.toggle("dark-mode");
      });
      
      // Ferme tous les sous-menus
      const submenus = document.querySelectorAll(".submenu");
      submenus.forEach(function (submenu) {
        submenu.style.display = "none";
      });

      // Affiche le sous-menu correspondant
      const submenuId = button.id + "SubMenu";
      const submenu = document.getElementById(submenuId);
      if (submenu) {
        if (submenu.style.display === "block") {
          submenu.style.display = "none"; // Ferme le sous-menu si déjà ouvert
        } else {
          submenu.style.display = "block"; // Affiche le sous-menu
        }
      }
    });
  });

  // Ferme les sous-menus lorsqu'on clique en dehors
  window.addEventListener("click", function (event) {
    if (!event.target.matches("button")) {
      const submenus = document.querySelectorAll(".submenu");
      submenus.forEach(function (submenu) {
        submenu.style.display = "none";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.querySelector(".language-button");
  const languageMenu = document.querySelector(".language-menu");

  // Ajouter un événement pour afficher/masquer le menu
  languageButton.addEventListener("click", () => {
    languageMenu.style.display =
      languageMenu.style.display === "block" ? "none" : "block";
  });

  // Cacher le menu si on clique en dehors
  document.addEventListener("click", (event) => {
    if (
      !languageButton.contains(event.target) &&
      !languageMenu.contains(event.target)
    ) {
      languageMenu.style.display = "none";
    }
  });
});

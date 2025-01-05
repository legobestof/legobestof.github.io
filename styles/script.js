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

// Fonction pour ouvrir la pop-up et remplir le contenu en fonction du projet cliqué
function openPopup(projectId) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const description = document.getElementById("popup-description");
  const link = document.getElementById("popup-link");

  // Remplir le contenu en fonction de l'ID du projet
  if (projectId === "project1") {
    title.textContent = "Projet 1";
    description.textContent =
      "Description détaillée du projet 1. Ce projet est un exemple de travail avec des technologies comme HTML, CSS et JavaScript.";
    link.href = "https://github.com/ton-repo1"; // Remplacer par le lien GitHub réel
  } else if (projectId === "project2") {
    title.textContent = "Projet 2";
    description.textContent =
      "Description détaillée du projet 2. Ce projet est un exemple de travail avec des frameworks comme React.";
    link.href = "https://github.com/ton-repo2"; // Remplacer par le lien GitHub réel
  } else if (projectId === "project3") {
    title.textContent = "Projet 3";
    description.textContent =
      "Description détaillée du projet 3. Ce projet utilise des bases de données et un back-end en Node.js.";
    link.href = "https://github.com/ton-repo3"; // Remplacer par le lien GitHub réel
  } else if (projectId === "project4") {
    title.textContent = "Projet 4";
    description.textContent =
      "Description détaillée du projet 4. Ce projet implique la création d'une application mobile avec Flutter.";
    link.href = "https://github.com/ton-repo4"; // Remplacer par le lien GitHub réel
  }

  popup.style.display = "flex"; // Afficher la pop-up
}

// Fonction pour fermer la pop-up
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Cacher la pop-up
}

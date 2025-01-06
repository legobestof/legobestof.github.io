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
      "Marathon de 2 jours au sein de l'IUT de Lens avec comme sujet un site qui fait office de carnet de voyage, en collaboration avec le département MMI qui s'est occupé de la partie visuel. Le départememnt informatique lui s'est occupé des fonctionalité du site en utilisant les languages php et html et le framework laravel.";
    link.href = "https://github.com/legobestof/var_dump";
  } else if (projectId === "project2") {
    title.textContent = "Projet 2";
    description.textContent =
      "LensJudge est un juge automatique pour compétition de programmation qui prend en compte plusieurs cas, avec par exemple la case mais aussi bien sûr plusieurs language de programmation.";
    link.href = "https://github.com/legobestof/LENSJudge";
  } else if (projectId === "project3") {
    title.textContent = "Projet 3";
    description.textContent =
      "Jeux Bomberman créer en java avec plusieurs niveau, différents type d'ennemis et différentes bombe. Utilisation de javaFX pour gérer la fenêtre du jeu.";
    link.href =
      "https://github.com/legobestof/Bomberman_GroupeC5_Alexandre_Lucas_Nathan";
  } else if (projectId === "project4") {
    title.textContent = "Projet 4";
    description.textContent =
      "Jeux du juste prix utilisant une API pour récupérer des produits Amazon et faire deviner leur prix. Utilisant python et flask mais aussi html css pour l'interface utilisateur.";
    link.href = "https://github.com/legobestof/MSI-Team-Malphite-WhatsApp";
  }

  popup.style.display = "flex"; // Afficher la pop-up
}

// Fonction pour fermer la pop-up
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Cacher la pop-up
}

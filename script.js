// script.js - Affichage/Dissimulation des contenus
document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('.item h3');
  articles.forEach(function (article) {
    article.addEventListener('click', function () {
      const content = this.nextElementSibling; // Trouve le paragraphe juste après le titre
      content.classList.toggle('hidden'); // Ajoute ou enlève la classe 'hidden'
    });
  });
});

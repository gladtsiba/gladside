/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Ajoutez ce script en bas de votre page HTML, avant la balise </body>
        
            // Sélectionne toutes les images zoomables
            var zoomableImages = document.querySelectorAll('.zoomable-img');
        
            // Ajoute un événement de survol à chaque image
            zoomableImages.forEach(function (image) {
                image.addEventListener('mouseover', function () {
                    image.style.transform = 'scale(1.5)'; // Zoom l'image en la mettant à 110% de sa taille normale
                });
        
                image.addEventListener('mouseout', function () {
                    image.style.transform = 'scale(1)'; // Rétablit la taille normale de l'image
                });
            });
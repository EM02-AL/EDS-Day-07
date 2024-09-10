// Initialisation de la carte centrée sur la France avec un niveau de zoom adapté
var map = L.map("map").setView([46.603354, 1.888334], 6);

// Ajout des tuiles OpenStreetMap pour la carte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Chemin du logo Epitech pour les marqueurs
var epitechIcon = L.icon({
  iconUrl: "icon.png", // Remplace par le chemin de l'icône locale
  iconSize: [38], // Taille de l'icône
  iconAnchor: [19, 38], // Point de l'icône à ancrer à la position du marqueur
  popupAnchor: [0, -30], // Position du popup par rapport à l'icône
});

// Liste des écoles Epitech Digital avec leurs coordonnées GPS et nom
var schools = [
  { name: "Paris", coords: [48.8566, 2.3522], popupText: "Paris rocks!" },
  { name: "Bordeaux", coords: [44.8378, -0.5792], popupText: "Bordeaux rocks!",},
  { name: "Lyon", coords: [45.764, 4.8357], popupText: "Lyon rocks!" },
  { name: "Toulouse", coords: [43.6045, 1.4442], popupText: "Toulouse rocks!" },
  { name: "Nantes", coords: [47.2184, -1.5536], popupText: "Nantes rocks!" },
  { name: "Nice", coords: [43.7102, 7.262], popupText: "Nice rocks!" },
];

// Boucle pour ajouter les marqueurs et les labels
schools.forEach(function (city) {
  // Ajout du marqueur avec l'icône
  var marker = L.marker(city.coords, { icon: epitechIcon })
    .addTo(map)
    .bindPopup(city.popupText);

  // Ajout d'un deuxième marqueur pour le texte (label)
  var labelMarker = L.marker(city.coords, {
    icon: L.divIcon({
      className: "city-label", // Classe CSS pour personnaliser le label
      html: `<span class="city-name">${city.name}</span>`, // Le nom de la ville dans un span cliquable
      iconSize: [100, 20], // Taille du label
      iconAnchor: [50, -15], // Ancre le texte sous l'icône
    }),
  }).addTo(map);

  // Ajout d'un événement click pour ajouter " rocks!" après le nom de la ville
  labelMarker.on("click", function (e) {
    //ajout de (e)
    var cityNameElement = e.target._icon.querySelector(".city-name"); // replace document by e.target._icon
    if (!cityNameElement.textContent.includes(" rocks!")) {
      cityNameElement.textContent += " rocks!";
    }
  });
});

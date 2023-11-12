const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Élements du DOM
const arrowRight = document.getElementById("arrow_right");
const arrowLeft = document.getElementById("arrow_left");
const dots = document.querySelectorAll('.dot');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector("#banner p");

// Index du slide
let i = 0


// Fonction pour afficher le slide
function showSlide(Index) {
	if (i >= slides.length) {
		return;
	}
}

// Carrousel images et textes
bannerImg.src = "./assets/images/slideshow/" + slides[i].image;
tagLine.innerHTML = slides[i].tagLine;

// Carrousel dots
for (let dot_selected = 0; dot_selected < 4; dot_selected ++){
	console.log(dot_selected)
}

// Clique fléche gauche
arrowLeft.addEventListener("click", () => {
	const prev = i -1;
	if (prev < 0) {
		showSlide(slides.length -1);
	} else {
		showSlide(prev);
	}
})

// Clique fléche droite
arrowRight.addEventListener("click", function () {
	const next = i +1;
	if (next >= slides.length) {
		showSlide(0);
	} else {
		showSlide(next);
	}
})
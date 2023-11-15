const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Élements du DOM
const arrowRight = document.getElementById("arrow_right");
const arrowLeft = document.getElementById("arrow_left");
const dots = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector("#banner p");
const lastSlide = slides.length-1;
const baseUrlImg = "./assets/images/slideshow/";
let allDots;

// Index du slide
let indexSlide = 0;

// Appel Fonction Main
function main(){
	createDots();
	prevSlide();
	nextSlide();
}

main();

// Fonction dots 
function createDots(){
	for (i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (i == indexSlide) {
			dot.classList.add("dot_selected");
		}
		dots.appendChild(dot);
	}

	allDots = document.querySelectorAll(".dot");
}


// Clique fléche gauche
function prevSlide() {
    arrowLeft.addEventListener("click", () => {
		
		allDots[indexSlide].classList.remove("dot_selected");

		if(indexSlide === 0) {
			indexSlide = lastSlide;
		} else {
			indexSlide --;
		};

		updateSlide();
	})
}


// Clique fléche droite
function nextSlide() {
	arrowRight.addEventListener("click", function () {

		allDots[indexSlide].classList.remove("dot_selected");

		if(indexSlide === lastSlide) {
			indexSlide = 0;
		} else {
			indexSlide ++
		}

		updateSlide();
	})
}


// Carrousel
function updateSlide() {
	allDots[indexSlide].classList.add("dot_selected");
	bannerImg.src = baseUrlImg + slides[indexSlide].image;
	tagLine.innerHTML = slides[indexSlide].tagLine;
}
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// let indexpage = document.querySelector('body').classList.contains('index');


// -- AOS animation

document.querySelectorAll('.aos-group').forEach((el) => {
	el.querySelectorAll('[data-aos]').forEach((aos, index) => {
		aos.dataset.aosDelay = 200 * (index + 1);
	});
});

AOS.init({
	once: true,
	mirror: false,
});


// -- SCROLL TO ELEMENT

$('a[data-href^="#"]').on('click', (e) => {
	e.preventDefault();
	// eslint-disable-next-line no-trailing-spaces

	const id = $(this).data('href');

	$('html,body').animate({
		scrollTop: $(id).offset().top,
	}, 1000);
	return false;
});

// -- RANDOM POINTS POSITION

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getRating() {
	const rating = getRandomInt(2) + 3;
	return rating > 5 ? rating - Math.random() : rating + Math.random();
}

const placeItRandom = function (els, parent = document.querySelector('body')) {
	els.forEach((el) => {
		const elRating = getRating().toFixed(1);
		el.querySelector('.rating').textContent = elRating;
		el.querySelector('.stars').classList.add(`stars-${elRating > 4.4 ? 0 : elRating > 3.4 ? 1 : 2}`);

		const x = Math.floor(Math.random() * (parent.offsetWidth - el.offsetWidth));
		const y = Math.floor(Math.random() * (parent.offsetHeight / 2 - el.offsetHeight / 2));

		$(el).css({
			transform: `translate(${x}px, ${y}px) scale(${Math.random() + 0.1})`,
			display: 'flex',
		});
	});
};


// -- WINDOW EVENTS

window.onload = () => {
	const burger = document.querySelector('a.target-burger');
	burger.addEventListener('click', () => {
		[...document.querySelectorAll('.burger-el')].forEach((el) => {
			el.classList.toggle('toggled');
		});
	});

	placeItRandom([...document.querySelectorAll('.point')], document.querySelector('.area-of-points'));
};

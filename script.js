const sliders = document.querySelectorAll('.slider');

let currentIndex = 0;

function hendleArrowClick(direction) {
	currentIndex += direction;
	if (currentIndex >= sliders.length) {
		currentIndex = 0;
	} else if (currentIndex < 0) {
		currentIndex = sliders.length - 1;
	}
	slide(currentIndex);
}

function slide(index) {

	for (let slider of sliders) {
		slider.classList.remove('active');
	}
	sliders[index].classList.add('active');	
}


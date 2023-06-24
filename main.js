const thumbBar = document.getElementsByClassName('thumb-bar')[0];

for (let i = 1; i <= 5; i++) {
	const img = document.createElement('img');
	img.src = `images/pic${i}.jpg`;
	thumbBar.appendChild(img);
	img.onclick = () => {
		// alert(`pic${i} clicked!`);
		const displayedImage =
			document.getElementsByClassName('displayed-img')[0];
		displayedImage.src = `images/pic${i}.jpg`;
	};
}

const dark = document.getElementsByClassName('dark')[0];

dark.onclick = () => {
	const overlay = document.getElementsByClassName('overlay')[0];
	if (dark.innerHTML === 'Darken') {
		dark.innerHTML = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		dark.innerHTML = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
};

const overlayOn = 'block';
const overlayOff = 'none';
const sliderClass = 'open';

document.getElementById('hello').addEventListener('click', () => {
	document.getElementById('overlay').style.display = overlayOn;
	setTimeout(() => {
		document.getElementById('overlay').classList.add(sliderClass);
		setTimeout(() => {
			document.getElementById('overlay').style.display = overlayOff;
			document.getElementById('overlay').classList.remove(sliderClass);
		}, 500);
	}, 2000);
});

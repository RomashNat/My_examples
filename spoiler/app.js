const btn = document.getElementById('myBtn').addEventListener('click', toggle);

function toggle() {
    
const panel = document.getElementById('spoiler');
panel.classList.toggle('closed');

if (panel.classList.contains('closed')) {
    detachModalEvents()
} else {
    attachModalEvents();
}
}

function handEvent(event) {
	if (event.key === 'Escape') {
        console.log(event.key);
		toggle();
	}
}

 function attachModalEvents() {
    document.addEventListener('keydown', handEvent);
  }

function detachModalEvents() {
    document.removeEventListener('keydown', handEvent);
}


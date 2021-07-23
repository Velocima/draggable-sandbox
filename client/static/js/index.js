const topContainer = document.querySelector('.top-container');
const bottomContainer = document.querySelector('.bottom-container');
const moveable1 = document.getElementById('moveable1');
const moveable2 = document.getElementById('moveable2');
const moveable3 = document.getElementById('moveable3');
const moveable4 = document.getElementById('moveable4');

function onDragStart(e) {
	e.dataTransfer.setData('text/plain', e.target.id);
	e.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event) {
	event.preventDefault();
}

function onDrop(event) {
	const id = event.dataTransfer.getData('text');
	const draggableElement = document.getElementById(id);
	const dropzone = event.target;
	dropzone.appendChild(draggableElement);
	draggableElement.style.backgroundColor = 'red';
	event.dataTransfer.clearData();
}

moveable1.ondragstart = onDragStart;
moveable2.ondragstart = onDragStart;
moveable3.ondragstart = onDragStart;
moveable4.ondragstart = onDragStart;
bottomContainer.ondragover = onDragOver;
topContainer.ondragover = onDragOver;
bottomContainer.ondrop = onDrop;
topContainer.ondrop = onDrop;

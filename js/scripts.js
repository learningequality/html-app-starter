// Your JavaScript code here!
console.log('"Hello world!"\n-Your HTML App Starter');

function toggleNavMenu() {
	var sidebar = document.getElementsByClassName('sidebar')[0];
	var button = document.getElementsByClassName('toggle-sidebar-button')[0];

	if (sidebar.classList.contains('visible')) {
		sidebar.classList.remove('visible');
		button.innerHTML = '&#9776;'
	} else {
		sidebar.classList.add('visible');
		button.innerHTML = '&#10005;'
	}
}

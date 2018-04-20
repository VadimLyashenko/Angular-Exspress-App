'use strict';
window.onload = function() {
	var els = {
		navIcon: document.getElementById('js-nav-button'),
		nav: document.getElementById('js-nav'),
		overlay: document.getElementById('js-overlay'),
		burgerLine: document.querySelector('.burger__line')
	};
	
	function toggleMenu() {
		els.burgerLine.classList.toggle('burger__line--active');
		document.body.classList.toggle('overflow');
		els.overlay.classList.toggle('site-overlay--visible');
		els.nav.classList.toggle('nav--visible');
	}
	
	[els.navIcon, els.overlay].forEach(function (el) {
		el.addEventListener('click', toggleMenu);
	});
}
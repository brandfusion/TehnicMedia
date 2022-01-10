function makeBannerStickyOnScroll(element) {
  if(element !== null) {
	let elementTop = element.getBoundingClientRect().top;
	let closeIcon = document.createElement('i');
	closeIcon.setAttribute('style' , 'padding: .5em; border-radius: 25px; background-color: black; color: white; position: absolute; right:0; cursor: pointer; top: 0');
	closeIcon.setAttribute('onclick' , 'this.parentNode.classList.add("closed"); this.parentNode.querySelectorAll("*").forEach(function(el) {el.remove()});');
	closeIcon.classList.add('fa' , 'fa-close' , 'close-icon');

	window.addEventListener('scroll' , function(e) {
	  if(window.scrollY > elementTop) {
		element.style.position = 'fixed';
		element.style.zIndex = '999';
		element.style.bottom = '2%';
		!element.classList.contains("closed") && element.querySelector('.close-icon') === null && element.appendChild(closeIcon);
	  } else {
		element.style.position = '';
		element.style.zIndex = '';
		element.style.bottom = '';
		element.querySelector('.close-icon') !== null && element.querySelector('.close-icon').remove();
	  }
	});
  }
}

makeBannerStickyOnScroll(document.querySelector('.ad728-wrapper-mobile'));
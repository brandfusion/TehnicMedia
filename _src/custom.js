function makeBannerStickyOnScroll(element) {
  if(element !== null) {
	let elementTop = element.getBoundingClientRect().top;
	let closeIcon = document.createElement('i');
	closeIcon.setAttribute('style' , 'padding: .5em; border-radius: 25px; background-color: black; color: white; position: absolute; right:4%; cursor: pointer; top: -8%');
	closeIcon.setAttribute('onclick' , 'this.parentNode.classList.add("closed"); this.parentNode.querySelectorAll("*").forEach(function(el) {el.remove()});');
	closeIcon.classList.add('fa' , 'fa-close' , 'close-icon');
	
	setTimeout(function() {
	  let bannerImage = element.querySelector('img');
	  if(bannerImage === null) return;
	  let bannerImageWidth = parseInt(bannerImage.getAttribute('width'));
	  let bannerImageHeight = parseInt(bannerImage.getAttribute('height'));
	  let shouldAttachScrollEvent = bannerImageHeight !== 0 && bannerImageWidth !== 0;
	  console.warn('bannerImage' , bannerImage , ' shouldAttachScrollEvent' , shouldAttachScrollEvent);
	  // don't attach scroll listener if there's no image rendered (width and height = 0)
	  if(shouldAttachScrollEvent) {
		window.addEventListener('scroll' , function(e) {
		  if(window.scrollY > 200) {
			element.parentNode.parentNode.classList.remove('hidden');
			element.style.position = 'fixed';
			element.style.zIndex = '999';
			element.style.bottom = '-4%';
			element.style.display = 'flex';
			element.style.width = '92vw';
			element.style.justifyContent = 'center';
			!element.classList.contains("closed") && element.querySelector('.close-icon') === null && element.appendChild(closeIcon);
		  } else {
			element.parentNode.parentNode.classList.add('hidden');
			element.style.position = '';
			element.style.zIndex = '';
			element.style.bottom = '';
			element.querySelector('.close-icon') !== null && element.querySelector('.close-icon').remove();
		  }
		});
	  }	  
	} , 1000);
  }
}

window.addEventListener('load' , function(){
  makeBannerStickyOnScroll(document.querySelector('.ad728-wrapper-mobile'));
});

document.addEventListener('contentLoaded' , function(event){
  console.error('here ', event.detail.template);
  let templateId = event.detail.template;
  if(templateId === 'ArticleBodyTemplate' || templateId === 'LoopArticoleStiriTemplate') {
    console.warn('yaay, attach the adserver script now');
    let banners = document.querySelectorAll('[data-template="' + templateId + '"] [data-banner]');
    if(banners.length) {
      banners.forEach(function(banner){
        console.warn('bannnneeeer' , banner);
		let addServerScript = document.createElement('script');
		addServerScript.setAttribute('async' , '');
		addServerScript.setAttribute('src', '//adserver.dotfusion.ro/revive/www/delivery/asyncjs.php');
		banner.appendChild(addServerScript);
	  });
	}
  }
});
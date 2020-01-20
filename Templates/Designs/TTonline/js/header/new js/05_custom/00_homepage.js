
document.addEventListener('DOMContentLoaded', function(event) {

    if (document.getElementById('HomePageSlider') !== null) {
        loadFirstView();
    }
});

/*START HOMEPAGE HANDLEBARS AJAX CALLS*/

//On page load, first items loaded will be the slider and the first categories
function loadFirstView() {
    var homePageSliderWrapper = document.getElementById('HomePageSlider');
    var homepageSliderTemplate = document.getElementById('HomepageSliderTemplate');
    var urlFeed = homePageSliderWrapper.getAttribute("data-json-feed");
    homePageSliderWrapper.appendChild(createLoaderForHandlebars());
    axios({
        method:'get',
        url:urlFeed
    })
    .then(function (response) {            
        var theScriptHTML = homepageSliderTemplate !== null ? homepageSliderTemplate.innerHTML : "";
        var theTemplate = Handlebars.compile(theScriptHTML);
        homePageSliderWrapper.innerHTML = theTemplate(response.data[0]);

        //initialize homepage slider after handlebars template was compiled
        initializeHomepageSlider()
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error boo");
    })
}
/*END HOMEPAGE HANDLEBARS AJAX CALLS*/

/*START ADDITIONAL FUNCTIONS*/
function initializeHomepageSlider() {
    $('.flexslider').flexslider({
        selector: ".featured-slider > .slider-item",
        maxItems: 1,
        minItems: 1,
        startAt: 0,
        animation:"slide",
        slideshow: true,
        controlNav: false,
        nextText:'<i class="fa fa-angle-right"></i>',
        prevText:'<i class="fa fa-angle-left"></i>'
    });
}

function createLoaderForHandlebars() {
    var loader = document.createElement('div');
    loader.classList.add('loader');
    
    return loader;
}
/*END ADDITIONAL FUNCTIONS*/
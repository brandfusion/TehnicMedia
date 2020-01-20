
document.addEventListener('DOMContentLoaded', function(event) {

    if (document.getElementById('HomePageSlider') !== null) {
        loadFirstView();
    }
});

/*START HOMEPAGE HANDLEBARS AJAX CALLS*/

//On page load, first items loaded will be the slider and the first categories
function loadFirstView() {
    var homePageSliderWrapper = document.getElementById('HomePageSlider');
    var urlFeed = homePageSliderWrapper.getAttribute("data-json-feed");
    axios({
        method:'get',
        url:urlFeed
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], homePageSliderWrapper);      

        //initialize homepage slider after handlebars template was compiled
        initializeHomepageSlider()
    })
    .then(function() {
        //load Recomandari T&T
        var recomandariWrapper = document.getElementById('RecomandariTT');
        getDataForHandlebars(recomandariWrapper)
    })    
    .catch(function (error) {
        // handle error
        console.log(error, "error boo1");
    })
}
/*END HOMEPAGE HANDLEBARS AJAX CALLS*/

/*START ADDITIONAL FUNCTIONS*/
function compileDataToHandlebars(data, homePageSliderWrapper) {
    var homepageSliderTemplate = document.getElementById(homePageSliderWrapper.getAttribute('data-template'));
    var theScriptHTML = homepageSliderTemplate !== null ? homepageSliderTemplate.innerHTML : "";
    var theTemplate = Handlebars.compile(theScriptHTML);
    homePageSliderWrapper.innerHTML = theTemplate(data);
}
//generic function to create call and get data to compile handlebars
function getDataForHandlebars(homePageSliderWrapper) {
    var urlFeed = homePageSliderWrapper.getAttribute('data-json-feed')
    axios({
        method:'get',
        url:urlFeed
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], homePageSliderWrapper);
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error boo2");
    })
}
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

/*END ADDITIONAL FUNCTIONS*/
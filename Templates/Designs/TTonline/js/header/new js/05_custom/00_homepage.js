document.addEventListener('DOMContentLoaded', function(event) {
    if (document.getElementById('HomePageSlider') !== null) {
        loadFirstView();
        loadOnScroll();
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
    .then(function() {
        //load Ultimele stiri
        var recomandariWrapper = document.getElementById('UltimeleStiri');
        getDataForHandlebars(recomandariWrapper)
    })
    .catch(function (error) {
    // handle error
    console.log(error, "error boo1");
    })
}

function loadOnScroll() {
    window.addEventListener('scroll', function(e) {
        
        var allHandlebarsWrapers = document.querySelectorAll('.handlebars-wrapper:not(.rendered)');
        var allSidebarWrappers = document.querySelectorAll('.sidebar-handlebars-wrapper:not(.rendered)');
        
        lazyLoadElements(allHandlebarsWrapers);
        lazyLoadElements(allSidebarWrappers);
    })
    
}

/*END HOMEPAGE HANDLEBARS AJAX CALLS*/

/*START ADDITIONAL FUNCTIONS*/
function lazyLoadElements(elementsList) {
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    var firstElem = elementsList[0];
    var currentElementTop = firstElem.closest('.main-body').offsetTop + firstElem.parentNode.offsetTop - 300;
    if (parseFloat(currentElementTop) < parseFloat(top) && !firstElem.classList.contains("rendering"))
    {
        firstElem.classList.add('rendering');
        getDataForHandlebars(firstElem);
    }
}

function compileDataToHandlebars(data, homePageSliderWrapper) {
    var homepageSliderTemplate = document.getElementById(homePageSliderWrapper.getAttribute('data-template'));
    var theScriptHTML = homepageSliderTemplate !== null ? homepageSliderTemplate.innerHTML : "";
    var theTemplate = Handlebars.compile(theScriptHTML);
    homePageSliderWrapper.innerHTML = theTemplate(data);
}
//generic function to create call and get data to compile handlebars
function getDataForHandlebars(homePageSliderWrapper) {
    var urlFeed = homePageSliderWrapper.getAttribute('data-json-feed');
    axios({
        method:'get',
        url:urlFeed
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], homePageSliderWrapper);
        /*if (homePageSliderWrapper.classList.contains("owl-carousel")) {
            initializeHomepageCarousel(homePageSliderWrapper.getAttribute("class"), parseFloat(homePageSliderWrapper.getAttribute("data-slides-number")));
        }*/
        homePageSliderWrapper.classList.remove('rendering')
        homePageSliderWrapper.classList.add('rendered')
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

function initializeHomepageCarousel(elem, numberOfSlides){
    $(".owl-carousel").onRefresh();
   /* $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 3,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: numberOfSlides
            }
        }
    });*/

}
/*END ADDITIONAL FUNCTIONS*/
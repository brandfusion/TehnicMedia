document.addEventListener('DOMContentLoaded', function(event) {
    console.log('here')
    window.scrollTo(0, 0); 
    //load content on homepage
    if (document.getElementById('HomePageSlider') !== null) {
        window.scrollTo(0, 0);
        loadFirstViewHomepage();
        getScrollContent();
    }
    //load content on other pages
    if (document.querySelector('.first-container') !== null) {
        window.scrollTo(0, 0);
        //load first view
        loadFirstView(document.querySelector('.first-container'));
        //load on scroll
        getScrollContent();
    }
    
    //load content on change page
    if(document.querySelector('.pagination') !== null) {
        loadOnChangePage();
    }
    
    //load article detail page
    if(document.querySelector('.first-container-article')) {
        loadArticle();        
        getScrollContent();
    }
});

function getScrollContent() {
    if(!isIE11()) {
        loadOnScroll();
    } else {
        loadOnScrollForIE();
    }
}
/*START HOMEPAGE HANDLEBARS AJAX CALLS*/

//On page load on homepage, first items loaded will be the slider and the first categories
function loadFirstViewHomepage() {
    var homePageSliderWrapper = document.getElementById('HomePageSlider');
    var urlFeed = homePageSliderWrapper.getAttribute("data-json-feed");
    var loader  = document.getElementById('loader');

    axios({
        method:'get',
        url:urlFeed
    })
    .then(function (response) {
        //hide loader
        loader.classList.add('hidden');
        //compile data
        compileDataToHandlebars(response.data[0], homePageSliderWrapper);              
        //initialize homepage slider after handlebars template was compiled
        initializeHomepageSlider();
    })
    .then(function() {
        //load Recomandari T&T
        var recomandariWrapper = document.getElementById('RecomandariTT');
        getDataForHandlebars(recomandariWrapper)
    })
    .then(function() {
        //load Ultimele stiri
        var ultimeleStiriWrapper = document.getElementById('UltimeleStiri');
        getDataForHandlebars(ultimeleStiriWrapper)
    })
    .catch(function (error) {
    // handle error
    console.log(error, "error first view hp");
    })
}
//On page load, make call for first container on page
function loadFirstView(handlebarsWrapper) {
    var urlFeed = handlebarsWrapper.getAttribute("data-json-feed");
    var loader  = document.getElementById('loader');
    axios({
        method:'get',
        url: urlFeed
    })
    .then(function (response) {
        //hide loader
        loader.classList.add('hidden');
        
        compileDataToHandlebars(response.data[0], handlebarsWrapper);
        
    })
    .then(function() {
        if(document.querySelector('.pagination') !== null) {
            loadOnChangePage();
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error first view");
    })
}
function loadOnScroll() {
   
    var allHandlebarsWrapers = document.querySelectorAll('.handlebars-wrapper');
    var allSidebarWrappers = document.querySelectorAll('.sidebar-handlebars-wrapper');
    
    const options = {
        threshold: 0,
        rootMargin: "100px"
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) {
                getDataForHandlebars(entry.target);
                observer.unobserve(entry.target);
            }
        })
    }, options);
    if(allHandlebarsWrapers.length > 0) {
        allHandlebarsWrapers.forEach(function(elem) {
            observer.observe(elem)
        });
    }
    if(allSidebarWrappers.length > 0) {
        allSidebarWrappers.forEach(function(elem) {
            observer.observe(elem)
        }); 
    }    
}

function loadOnScrollForIE() {
    
    var allHandlebarsWrapers = document.querySelectorAll('.handlebars-wrapper');
    var allSidebarWrappers = document.querySelectorAll('.sidebar-handlebars-wrapper');

    for(var x = 0; x < allHandlebarsWrapers.length; x++) {
        getDataForHandlebars(allHandlebarsWrapers[x]);
    }
    for(var x = 0; x < allSidebarWrappers.length; x++) {
        getDataForHandlebars(allSidebarWrappers[x]);
    }  
}

function loadOnChangePage() {
    var buttons = document.querySelectorAll('.pagination li:not(.active)');
    
    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener('click', function(e) {
            document.querySelector('li.active').classList.remove('active');
            button.classList.add('active');
            window.scrollTo(0, 0);
            
            if(button.textContent !== "1" && document.querySelector('.hideSecondPage') !== null) {
                Array.prototype.forEach.call(document.querySelectorAll('.hideSecondPage'), function(elem) {elem.classList.add("hidden")});
            }
            var urlFeed = button.getAttribute('data-page-link');
            var containerName = button.getAttribute('data-container');
            var container = document.querySelector('[data-template="'+containerName+'"]');

            getDataToChangePage(urlFeed, container)
        });        
    });    
}

function getDataToChangePage(urlFeed, container) {
    axios({
        method:'get',
        url: urlFeed
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], container);
    })
    .then(function() {
        loadOnChangePage()
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error chang page");
    })
}
function loadEdition(button) {    
    var year = button.getAttribute('data-year');
    var feedURL = document.querySelector('.bhoechie-tab-menu .list-group').getAttribute('data-json-feed-reviste') + year;
    var container = document.querySelector('.bhoechie-tab-content');
    
    document.querySelector('.bhoechie-tab-menu .list-group-item.active').classList.remove('active');
    button.classList.add('active');

    axios({
        method:'get',
        url: feedURL
    })
        .then(function (response) {
            compileDataToHandlebars(response.data[0], container);
        })
        .catch(function (error) {
            // handle error
            console.log(error, "error editions by year");
        })
}
function getEditionsByYear() {
    var archiveButtons = document.querySelectorAll('.bhoechie-tab-menu .list-group-item');
    Array.prototype.forEach.call(archiveButtons, function(item) {
       item.addEventListener('click', function(e) { loadEdition(item); }); 
    });
}

function loadArticle() {
    var firstContainer = document.querySelector('.first-container-article');
    var urlFeed = firstContainer.getAttribute("data-json-feed");
    var loader  = document.getElementById('loader');
    axios({
        method:'get',
        url: urlFeed
    })
    .then(function (response) {
        //hide loader
        loader.classList.add('hidden');
        compileDataToHandlebars(response.data[0], firstContainer);

        var authorsArray = response.data[0].ArticlesContainer[0].Article[0].articleAutori;
        return authorsArray;
    })
    .then(function (response) {
        var authorsWrapper = document.querySelector('.author-section');
        var url = authorsWrapper.getAttribute("data-json-feed");
        response.map(function(o, i) {
            url += response.length - 1 === i ? o.Id : o.Id + ",";
        });
        getDataForArticlePage(authorsWrapper, url);
        
        return response;
    })   
    .then(function(response) {
        var authorIds = ""
        response.map(function(o, i) {
            authorIds +=  response.length - 1 === i ? o.Id : o.Id + ","
        });
        loadArticleSections(authorIds);
    })    
    .catch(function (error) {
        // handle error
        console.log(error, "error load article");
    })
}

function loadArticleSections(authorId) {
    var authorsContainter = document.querySelector('.author-template');
    var urlFeed = authorsContainter.getAttribute("data-json-feed") + "&Autori=" + authorId;;
    axios({
        method:'get',
        url: urlFeed
    })
    .then(function (response) {
        console.log(response, 'this is an array1')
        var isResponse = response.data.length > 0; 
        compileDataToHandlebars(response.data[0], authorsContainter);

        var authorsArray = isResponse > 0 ? response.data[0].ArticlesContainer : undefined;
        console.log(authorsArray, 'this is an array')
        return authorsArray;
    })
    .then(function (response) {      
        console.log(response, 'this is a response')
        var sectionContainer = document.querySelector('.section-template');
        var url = sectionContainer.getAttribute("data-json-feed");
        if(response !== undefined) {
            response.map(function(o, i) {
                url += response.length - 1 === i ? o.Article[0].pagePageID : o.Article[0].pagePageID + ",";
            });        }
        
        getDataForArticlePage(sectionContainer, url);
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error load article sections");
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
    var urlFeed = homePageSliderWrapper.getAttribute('data-json-feed');
    axios({
        method:'get',
        url: urlFeed
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], homePageSliderWrapper);   
        if(isIE11()) {
            homePageSliderWrapper.classList.remove('rendering');
            homePageSliderWrapper.classList.add('rendered');
        }

        if(document.querySelector('.pagination') !== null) {
            loadOnChangePage();
        }
    })
    .then(function() {
        if(homePageSliderWrapper.classList.contains("carousel-inner")) {
            initializeEventsCarousel();
        }
        if (homePageSliderWrapper.classList.contains("owl-carousel")) {
            $(".owl-carousel").trigger('destroy.owl.carousel');
            $(".owl-companii-1").trigger('destroy.owl.carousel');
            $(".owl-companii-2").trigger('destroy.owl.carousel');
            initializeHomepageCarousel();
        }
        if(document.querySelector('.bhoechie-tab-container') !== null) {
            loadEdition(document.querySelector('.bhoechie-tab-menu .list-group-item'));
            getEditionsByYear();      
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error data for hdb");
    })
}
function getDataForArticlePage(wrapper, url) {
    axios({
        method:'get',
        url: url
    })
    .then(function (response) {
        compileDataToHandlebars(response.data[0], wrapper);
    })
    .catch(function (error) {
        // handle error
        console.log(error, "error data for article");
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

function initializeHomepageCarousel(){
    $('.owl-carousel').not('.owl-parteneri, .owl-parteneri-1, .owl-companii-1, .owl-companii-2, .owl-redactori, .owl-testimonial').owlCarousel({
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
                items: 4
            }
        }
    })
    $('.owl-companii-1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
    //    autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $(".owl-companii-2").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
      //  autoplay: true,
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
                items: 6
            }
        }
    });
    $('.owl-parteneri-1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        center:true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.owl-redactori').owlCarousel({
        loop: false,
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
                items: 3
            }
        }
    })
    $('.owl-parteneri').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 2,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
}

function initializeEventsCarousel() {
    $(".carousel-inner .item:first-child").addClass('active');

    $(".glyphicon-chevron-right").hide();
    $(".glyphicon-chevron-left").hide();

    $('#myCarousel').hover(function() {
        $(".glyphicon-chevron-right").show();
        $(".glyphicon-chevron-left").show();
    }, function() {
        $(".glyphicon-chevron-right").hide();
        $(".glyphicon-chevron-left").hide();
    });
}
function isIE11() {
    return (!(window.ActiveXObject) && "ActiveXObject" in window);
}
/*END ADDITIONAL FUNCTIONS*/

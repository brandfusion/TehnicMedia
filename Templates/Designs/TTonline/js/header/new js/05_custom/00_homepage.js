
document.addEventListener('DOMContentLoaded', function(event) {
    console.log("TEST");
    if (document.getElementById('HomePageSlider') !== null) {
        loadFirstView();
    }
});
//On page load, first items loaded will be the slider and the first categories
function loadFirstView() {
    var homePageSliderWrapper = document.getElementById('HomePageSlider');
    var homepageSliderTemplate = document.getElementById('HomepageSliderTemplate');
    var urlFeed =homePageSliderWrapper.getAttribute("data-json-feed");
    axios({
        method:'get',
        url:urlFeed
    })
        .then(function (response) {
            console.log(response, 'this is the response');
            
            var theScriptHTML = homepageSliderTemplate !== null ? homepageSliderTemplate.innerHTML : "";
            var theTemplate = Handlebars.compile(theScriptHTML);
            homePageSliderWrapper.innerHTML = theTemplate(response.data[0]);
        })
        .catch(function (error) {
            // handle error
            console.log(error, "error boo");
        })
}
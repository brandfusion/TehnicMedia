/*$(document).ready(function(){
      // START filter events
  
  
      function getAPI() {
          var api = '/Default.aspx?ID=4262';
            var deferred = $.Deferred();
            $.ajax({
                url: api,
                type: 'GET'
            })
            .done(function(data) {
                deferred.resolve(data);
            })
            .fail(function() {
                deferred.reject();
            });
          
            return deferred.promise();
      }
  
      
  
  
      $.when(getAPI()).then(function(data){

            var dataset = data;
            var appliedFilters = [{
              name: null,
              value: null
            } , {
              name: null,
              value: null
            } , {
              name: null,
              value: null
            } , {
              name: null,
              value: null
            }];


         if($("#lista_evenimente_custom").length > 0) {

     

                $("#main-content").prepend("<div style='margin-left: 15px; margin-bottom: 15px; background-color:red; display:inherit;' min-height:300px;class='col-md-12' id='filter'>");


                // create select for country filtering
                var countrySelect = "";
                countrySelect += "<div style='float: left; margin-right: 1em; margin-bottom: 1em' id='countryFiltering'>";
                countrySelect += "<label for='filterByCountry'>" + "Filtreaza dupa Tara " + "</label>";
                countrySelect += "<select class='form-control filter-events' id='filterByCountry'>";
                countrySelect += "<option selected disabled>" + "Selectati o optiune.." + "</option>";
                $.map(dataset , function(obj){
                  countrySelect += "<option value=" + obj.TaraClean + ">" + obj.Tara + "</option>";
                });
                countrySelect += "</select>";
                countrySelect += "</div>";
                $("#filter").append(countrySelect);

                // create select for city filtering
                var citySelect = "";
                citySelect += "<div style='float: left; margin-right: 1em; margin-bottom: 1em' id='cityFiltering'>";
                citySelect += "<label for='filterByCity'>" + "Filtreaza dupa oras" + "</label>";
                citySelect += "<select class='form-control filter-events' id='filterByCity'>";
                citySelect += "<option selected disabled>" + "Selectati o optiune.." + "</option>";
                $.map(dataset , function(obj){
                  citySelect += "<option value='" + obj.OrasClean + "'>" + obj.Oras + "</option>";
                });
                citySelect += "</select>";
                citySelect += "</div>";
                $("#filter").append(citySelect);

                // create select for location filtering
                var locationSelect = "";
                locationSelect += "<div style='float: left; margin-right: 1em; margin-bottom: 1em' id='locationFiltering'>";
                locationSelect += "<label for='filterByLocation'>" + "Filtreaza dupa locatie" + "</label>";
                locationSelect += "<select class='form-control filter-events' id='filterByLocation'>";
                locationSelect += "<option selected disabled>" + "Selectati o optiune.." + "</option>";
                $.map(dataset , function(obj){
                  locationSelect += "<option value='" + obj.Locatie + "'>" + obj.Locatie + "</option>";
                });
                locationSelect += "</select>";
                locationSelect += "</div>";
                $("#filter").append(locationSelect);

                // create select for month filtering
                var months = ["ianuarie" , "februarie" , "martie" , "aprilie" , "mai" , "iunie" , "iulie" , "august" , "septembrie" , "octombrie" , "noiembrie" , "decembrie"];

                var monthSelect = "";
                monthSelect += "<div style='float: left; margin-right: 1em; margin-bottom: 1em' id='periodFiltering'>";
                monthSelect += "<label for='filterByPeriod'>" + "Filtreaza dupa perioada" + "</label>";
                monthSelect += "<select class='form-control filter-events' id='filterByPeriod'>";
                monthSelect += "<option selected disabled>" + "Selectati o optiune.." + "</option>";
                $.map(months , function(value){
                  monthSelect += "<option value='" + value + "'>" + value + "</option>";
                });
                monthSelect += "</select>";
                monthSelect += "</div>";
                $("#filter").append(monthSelect);


                // create button for resetting filters
                var resetFilters = "";
                resetFilters += "<div style='float: left; margin-right: 1em; margin-bottom: 1em; margin-top: 1.6em' id='resetFiltering'>"
                resetFilters += "<button style='height: 35px' id='resetAllFilters' class='btn btn-primary'>" + "Reseteaza toate filtrele" + "</button>";
                resetFilters += "</div>";
                $("#filter").append(resetFilters);


            }

  

      });
});*/

  
  
      // END filter events
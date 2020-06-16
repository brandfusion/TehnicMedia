$(function(){

    $("form[id='filtersForm']").find(".filtersContainer").removeClass("hide");
    $("form[id='filtersForm']").find(".filtersContainer").find(".checkBoxContainer").removeClass("hide");


    // show only 10 checkboxes at first

    var showLimit = 0;
  /*
   

    $("#Sectiune .checkBoxContainer").each(function(){
        if ($(this).index() >= showLimit) {
            $(this).addClass('hidden');
        }
    });
  */
   $("#Producator .checkBoxContainer").each(function(){
        if ($(this).index() >= showLimit) {
            $(this).addClass('hidden');
        }
    });
  
  $("#Furnizor .checkBoxContainer").each(function(){
        if ($(this).index() >= showLimit) {
            $(this).addClass('hidden');
        }
    });

  $("#Subcategorie .checkBoxContainer").each(function(){
        if ($(this).index() >= showLimit) {
            $(this).addClass('hidden');
        }
    });
	
  
  

/*
    // make select for asc / desc sorting
    var $sortBySelect = $("<select class='form-control' id='sort-by-asc-desc'></select>");
    $sortBySelect.append("<option selected disabled value='ASC'>Selecteaza o optiune...</option>");
    $sortBySelect.append("<option name='SortOrder' value='ASC'>1 - Ordoneaza dupa nume A-Z</option>");
    $sortBySelect.append("<option name='SortOrder' value='DESC'>2 - Ordoneaza dupa nume Z-A</option>");

    $("input[name='search-products']").before("<div style='float: left; display: flex; flex-direction: column; align-items: flex-start; padding-bottom: 0.5em' id='ascending-descending'></div>");
    $("#ascending-descending").append("<label for='sort-by-asc-desc'>Sorteaza dupa nume</label>");
    $("#ascending-descending").append($sortBySelect);    

*/

    $('span.seeMore').click(function(){

        // solve text issue - mai putin / mai mult
        var text = "Vezi Producator/Brand";

        if($(this).text() === text) {
            $(this).text("Inchide lista");
        } else {
            $(this).text("Vezi Producator/Brand");
        }

        if($(this).siblings().hasClass("hidden")) {
            $(this).siblings().removeClass("hidden");
        } else {
            $(this).siblings().not("span.seeMore").addClass("hidden");
        }
    });
  
  
  $('span.seeMoreFurnizori').click(function(){

        // solve text issue - mai putin / mai mult
      	var textDealer = "Vezi Reprezentant/Dealer";

        if($(this).text() === textDealer) {
            $(this).text("Inchide lista");
        } else {
            $(this).text("Vezi Reprezentant/Dealer");
        }

        if($(this).siblings().hasClass("hidden")) {
            $(this).siblings().removeClass("hidden");
        } else {
            $(this).siblings().not("span.seeMore").addClass("hidden");
        }
    });
  
  $('span.seeMoreSubcategorie').click(function(){

        // solve text issue - mai putin / mai mult
      	var textSubcategorie = "Vezi Produse si servicii";

        if($(this).text() === textSubcategorie) {
            $(this).text("Inchide lista");
        } else {
            $(this).text("Vezi Produse si servicii");
        }

        if($(this).siblings().hasClass("hidden")) {
            $(this).siblings().removeClass("hidden");
        } else {
            $(this).siblings().not("span.seeMore").addClass("hidden");
        }
    });
  
  
  

    var baseURL = 'http://ttonline.dotfusion.ro/ibuysmart?';

    // $("form[id='filtersForm'] input:checkbox").change(function(event){
    //     event.preventDefault();
    //     baseURL += $('input[name="Producator"]:checked , input[name="GroupID"]:checked').serialize();
    //     window.location.href = baseURL;
    // });


    function addOrUpdateUrlParam(uri, paramKey, paramVal) {
      var re = new RegExp("([?&])" + paramKey + "=[^&#]*", "i");
      if (re.test(uri)) {
        uri = uri.replace(re, '$1' + paramKey + "=" + paramVal);
      } else {
        var separator = /\?/.test(uri) ? "&" : "?";
        uri = uri + separator + paramKey + "=" + paramVal;
      }
      return uri;
    }


    $('input[name="Producator"] , input[name="GroupID"] , input[name="Dealer"] , input[name="Subcategorie"]' ).on('change', function() {
      
      var value = $(this).val();
      var argument = $(this).attr("name");
      var url = window.location.href;
        url = url.split('?')[0];
      
      
      if($(this).attr('checked') == 'checked'){
      	 
        var result = addOrUpdateUrlParam(url , argument , '');
      }else{
      
      var result = addOrUpdateUrlParam(url , argument , value);
      }
      
      window.location.href = result;

    });

/*
  
  */
   $('input[name="Producator"] , input[name="GroupID"] , input[name="Dealer"]').each(function(){
   		if($(this).attr('checked') == 'checked'){
         	
          	var parent = $(this).parent();
            var parentSiblings = parent.siblings(".checkBoxContainer");
           
            parentSiblings.each(function(){
              $(this).addClass("hidden");
            });
         }
   		
   });
  
  function SubcategorieHide() {
 	$('#Subcategorie').parent().addClass('hidden');
  	$('input[name="GroupID"]').each(function(){
      	if($(this).attr('checked') == 'checked'){
         	$('#Subcategorie').parent().removeClass('hidden');
         }
      
      
    });
    
  }
  
  SubcategorieHide()
  
  
    $('select[id="sort-by-asc-desc"]').on("change" , function(){
      var value = $(this).val();
      var argument = $(this).find("option:selected").attr("name");
      argument = "SortBy=Nume&" + argument;
      var url = window.location.href;
      var result = addOrUpdateUrlParam(url , argument , value);

      window.location.href = result;
    });
  
  
  	$("select.tt-custom-select").on("change" , function(event){
		
      	var value = $(this).val();
      	var argument = $(this).attr("name");
      	var url = window.location.href;
      	var result = addOrUpdateUrlParam(url , argument , value);
      
      	window.location.href = result;
	});


    $(".removeFiltersContainer a").on("click" , function(event){
        event.preventDefault();
        window.location.href = "/Default.aspx?ID=4228";
    });
  
  
  
  
  //filtre evenimente

 $('[name="Tara"],[name="Oras"],[name="Locatie"],[name="Perioada"],[name="An"],[name="Organizator"]').on("change", function() {
       var value = $(this).val();
      var argument = $(this).attr("name");
      var url = window.location.href;   
    
    var newUrl = addOrUpdateUrlParam(url , argument , value);
  
  	 window.location.href = newUrl;
    
     });
  
  

});






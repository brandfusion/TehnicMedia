window.newsletterSubscribeNoRedirectInPage = function(data) {
  var url = data + $("#newsletter_subscribe").val();
  
  deferred = $.Deferred()
  $.ajax({'url': url,type:'get'}).done(function(response){
    var responseText = $($.parseHTML(response)).filter("#response").text()
      alert(responseText)
      $("#newsletter_subscribe").val("")
      $("#newsletter_subscribe").attr("placeholder", responseText)
      deferred.resolve()
    })
    return deferred.promise()
}

window.getQueryVariable = function(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("?");
      for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");
              if (pair[0] == variable) {
                return pair[1];
              }
      }
      return false;
}
   
window.replaceUrlParam = function(url, paramName, paramValue) {
   var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)');
   if (url.search(pattern) >= 0) {
       return url.replace(pattern,'$1' + paramValue + '$2')
   }
   return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue 
}

$(document).ready( function(){
  $(".landing-menu li a").click(function() {
    if($("+.landing",this).css("display")=="none") {      
      $("+.landing",this).slideDown("normal");
    }
    else {
      $("+.landing",this).slideUp("normal");
    }
  });
});

// Revista Tiparita
function checkInputsValidity() {
  
  var counter = 0;

  $("#dw-form-3 input.form-control[required]").each(function(index , el){
      if($(this).val() == "") {
          $(this).css("border" , "1px solid red");
          counter++;
      } else {
          $(this).css("border" , "1px solid #d0d0d0");
      }
  });
  
  
  if(counter == 0) {
  	return true;
  } else {
  	return false;
  }
  

}

// Revista Online
function checkInputsValidityForOnlineMagazine() {
  
  var counter = 0;

  $("#dw-form-4 input.form-control[required]").each(function(index , el){
      if($(this).val() == "") {
          $(this).css("border" , "1px solid red");
          counter++;
      } else {
          $(this).css("border" , "1px solid #d0d0d0");
      }
  });
  
  
  if(counter == 0) {
  	return true;
  } else {
  	return false;
  }
  

}

// Revista Tiparita
function checkCheckboxesValidity() {
  
  var counter = 0;

  if($("#dw-form-3 input[type='radio'][name='Firmadumneavoastraeste']:checked").length == 0) {
  	counter++;
	$("#dw-form-3 input[type='radio'][name='Firmadumneavoastraeste']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Firmadumneavoastraeste']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-3 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate']:checked").length == 0) {
  	counter++;
    $("#dw-form-3 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-3 input[type='radio'][name='Adresa']:checked").length == 0) {
  	counter++;
    $("#dw-form-3 input[type='radio'][name='Adresa']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Adresa']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-3 input[type='radio'][name='Dorescsamaabonez']:checked").length == 0) {
    counter++;
  	$("#dw-form-3 input[type='radio'][name='Dorescsamaabonez']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Dorescsamaabonez']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-3 input[type='radio'][name='Dorescfacturareacomenziipe']:checked").length == 0) {
  	counter++;
    $("#dw-form-3 input[type='radio'][name='Dorescfacturareacomenziipe']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Dorescfacturareacomenziipe']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-3 input[type='radio'][name='Dorescsaplatesc']:checked").length == 0) {
  	counter++;
    $("#dw-form-3 input[type='radio'][name='Dorescsaplatesc']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-3 input[type='radio'][name='Dorescsaplatesc']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
 
  if(counter == 0) {
  	return true;
  } else {
  	return false;
  }
}



// Revista Online
function checkCheckboxesValidityForOnlineMagazine() {
  
  var counter = 0;

  if($("#dw-form-4 input[type='radio'][name='Firmadumneavoastraeste2']:checked").length == 0) {
  	counter++;
	$("#dw-form-4 input[type='radio'][name='Firmadumneavoastraeste2']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-4 input[type='radio'][name='Firmadumneavoastraeste2']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  if($("#dw-form-4 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate2']:checked").length == 0) {
  	counter++;
    $("#dw-form-4 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate2']").parent().siblings().find("label").css("border-bottom" , "1px solid red");
  } else {
  	$("#dw-form-4 input[type='radio'][name='Produseleserviciilefirmeidumneavoastrasuntdestinate2']").parent().siblings().find("label").css("border-bottom" , "none");
  }
  
  
  console.log("Counter" , counter);
 
  if(counter == 0) {
  	return true;
  } else {
  	return false;
  }
}



$(function(){
  
  // if we are on subscribe to magazine page , create validation functionality
  if($("#dw-form-3").length > 0) {
    
    	$("#Domeniideinteres").on("change" , function(event){
        	var option = $(this).val();
          
          	if(option == "Altele") {
            	$("input.alt_domeniu_de_interes").removeClass("hidden");
              	$("input.alt_domeniu_de_interes").attr("required" , "required");
            } else {
            	$("input.alt_domeniu_de_interes").addClass("hidden");
              	$("input.alt_domeniu_de_interes").removeAttr("required");
            }
        });
    
    
    	$("#Trimitecererea").on("click" , function(event) {
          	
          	event.preventDefault();
        	var inputsAreValid = checkInputsValidity();
          	var radiosAreValid = checkCheckboxesValidity();
			
          	console.log(inputsAreValid , radiosAreValid);
          
          	if(inputsAreValid != true || radiosAreValid != true) {
            	alert("Unul sau mai multe câmpuri nu sunt completate");
            } else {
            	$("#dw-form-3").submit();
            }
        });

  } 


  
  if($("#dw-form-4").length > 0) {
    
    
    	$("#Domeniideinteres2").on("change" , function(event){
        	var option = $(this).val();
          
          	if(option == "Altele") {
            	$("input.alt_domeniu_de_interes").removeClass("hidden");
              	$("input.alt_domeniu_de_interes").attr("required" , "required");
            } else {
            	$("input.alt_domeniu_de_interes").addClass("hidden");
              	$("input.alt_domeniu_de_interes").removeAttr("required");
            }
        });
    
    
    
    	$("#Trimitecererea2").on("click" , function(event) {
        	var inputsAreValid = checkInputsValidityForOnlineMagazine();
          	var radiosAreValid = checkCheckboxesValidityForOnlineMagazine();
	
          	console.log(inputsAreValid);
          	console.log(radiosAreValid);
          
          	event.preventDefault();
          
          	if(inputsAreValid == false || radiosAreValid == false) {
            	alert("Unul sau mai multe câmpuri nu sunt completate");
            } else {
            	$("#dw-form-4").submit();
            }
        });

  }
  
  
  
  
  
  addthis.sharecounters.getShareCounts('facebook', function(obj) {        
    // console.log(obj)
  });
  
  
  // Imagini

  function imageResize() {
    $('.proportie-1').each(function(){
      var proportie = 1.52;
      var width = $(this).width();
      var height = width / 1.52;
      $(this).height(height);
    });
  }
 
  //Init
  imageResize();

  //Resize
  $(window).resize(function(){
    imageResize();
  });


  $('.news-title').on("mouseenter", function(){
    $(this).addClass("news-title-mouseenter");
  });

  $('.news-title').on("mouseleave", function(){
    $(this).removeClass("news-title-mouseenter");
  });

  $('.featured-header h2').on("mouseenter", function(){
    $(this).addClass("news-title-mouseenter");
  });

  $('.featured-header h2').on("mouseleave", function(){
    $(this).removeClass("news-title-mouseenter");
  });
  
  // Resize Imagini
  
  $( window ).on( "load", function(){
  
  function incadrareImagineInContainer() {
    $('.image-overlay img').each(function(){
     
      var height = $(this).get(0).naturalHeight;
      var width = $(this).get(0).naturalWidth;
      
      // // var height = $(this).height();
      // // var width = $(this).width();

      var proportieImagine = width/height;
        
    
      
      if (proportieImagine <= 1.75) {
        $(this).css('height', '100%');
      }
      else {
        $(this).css('width', '100%');
      }      

    });
  }

  //Init
  
  incadrareImagineInContainer();

    
    });
    
  // Generare Calendar in Functie de Luna Curenta

  function monthGenerator() {

    var month = new Array();
    month[0] = "ianuarie";
    month[1] = "februarie";
    month[2] = "martie";
    month[3] = "aprilie";
    month[4] = "mai";
    month[5] = "iunie";
    month[6] = "iulie";
    month[7] = "august";
    month[8] = "septembrie";
    month[9] = "octombrie";
    month[10] = "noiembrie";
    month[11] = "decembrie";

    var d = new Date();
    var currentMonth = month[d.getMonth()];

    $('.side-month-' + currentMonth).css("display", "block");

    $('.side-calendar-' + month[0]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[0]).css("display", "block");
    });

    $('.side-calendar-' + month[1]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[1]).css("display", "block");
    });

    $('.side-calendar-' + month[2]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[2]).css("display", "block");
    });

    $('.side-calendar-' + month[3]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[3]).css("display", "block");
    });

    $('.side-calendar-' + month[4]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[4]).css("display", "block");
    });

    $('.side-calendar-' + month[5]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[5]).css("display", "block");
    });

    $('.side-calendar-' + month[6]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[6]).css("display", "block");
    });

    $('.side-calendar-' + month[7]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[7]).css("display", "block");
    });

    $('.side-calendar-' + month[8]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[8]).css("display", "block");
    });

    $('.side-calendar-' + month[9]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[9]).css("display", "block");
    });

    $('.side-calendar-' + month[10]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[10]).css("display", "block");
    });    

    $('.side-calendar-' + month[11]).click(function(){
      $('.side-month').css("display", "none");
      $('.side-month-' + month[11]).css("display", "block");
    });

  }

  //Init
  monthGenerator();


  // Generare Evenimente Calendar Dinamic
$(document).ready( function(){
  $.ajax({
    url: '/Default.aspx?ID=4262',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(response) {
    // console.log("response", response);
    var data  = response;
    _.map(data, function(obj){    

      var start = obj.startMonth + '-' + obj.startDay;    
      var end = obj.endMonth + '-' + obj.endDay;


      $('.day-' + start).each(function(){
          $('.day-' + start).css("background-color", "#ffa700").addClass("marcat");
      });

      $('.day-' + end).each(function(){
          $('.day-' + end).css("background-color", "#ffa700").addClass("marcat");
      });

      if ($('.day-' + start).hasClass("marcat") == true) {
        $('.link-eveniment-' + start).attr("href", obj.URLEveniment).text(obj.title);
      }

      if ($('.day-' + end).hasClass("marcat") == true) {
        $('.link-eveniment-' + end).attr("href", obj.URLEveniment).text(obj.title);
      }

      if (parseInt(obj.startDay) < parseInt(obj.endDay)) {        
        var contor = parseInt(obj.endDay) - parseInt(obj.startDay);

        for (var i = 1 ; i <= contor; i++) {
          var inside = obj.startMonth + '-' + (parseInt(obj.startDay)+i).toString();
          $('.day-' + inside).each(function(){
            $('.day-' + inside).css("background-color", "#ffa700").addClass("marcat");
          });
          if ($('.day-' + inside).hasClass("marcat") == true) {
            $('.link-eveniment-' + inside).attr("href", obj.URLEveniment).text(obj.title);
          }
        }
      }
      else {
        var contor = parseInt(obj.startDay);
        for (var i = 1 ; i <= contor; i++) {
          var inside = obj.startMonth + '-' + (parseInt(obj.startDay)+i).toString();
          $('.day-' + inside).each(function(){
            $('.day-' + inside).css("background-color", "#ffa700").addClass("marcat");
          });
          if ($('.day-' + inside).hasClass("marcat") == true) {
            $('.link-eveniment-' + inside).attr("href", obj.URLEveniment).text(obj.title);
          }
        }
        if (parseInt(obj.endDay < 10)) {
          var contor = parseInt(obj.endDay);
          for (var i = 1 ; i < contor; i++) {
            var inside = obj.endMonth + '-' + "0" + i.toString();
            $('.day-' + inside).each(function(){
              $('.day-' + inside).css("background-color", "#ffa700").addClass("marcat");
            });
            if ($('.day-' + inside).hasClass("marcat") == true) {
              $('.link-eveniment-' + inside).attr("href", obj.URLEveniment).text(obj.title);
            }
          }
        }
        else {
          var contor = parseInt(obj.endDay);
          for (var i = 1 ; i < contor; i++) {
            var inside = obj.endMonth + '-' + "0" + i.toString();
            // console.log(inside);
            console.log("INSIDE: " , inside);
            $('.day-' + inside).each(function(){
              $('.day-' + inside).css("background-color", "#ffa700").addClass("marcat");
            });
            if ($('.day-' + inside).hasClass("marcat") == true) {
              $('.link-eveniment-' + inside).attr("href", obj.URLEveniment).text(obj.title);
            }
          }
        }
      }   

    });
  })
  .fail(function() {
    console.log("error");
  });

});
  //Formular Adaugare Eveniment in Calendar

    
  function validareForm() {
    var nume = $("form#dw-form-6 :input#nume").val();
    var email = $("form#dw-form-6 :input#email").val();

    if (nume == "") return false;
    if (email == "") return false;

    return true;
  }

  $('[name="AddtoCalendar"]').on('click', function(e) {
    e.preventDefault();

    var sendForm = validareForm();

    if (sendForm == true) {
      var dataSend = {};
      var url = "/Default.aspx?ID=5271&PID=165";

      dataSend["nume"] = $('[name="nume"]').val();
      dataSend["email"] = $('[name="email"]').val();
      dataSend["telefon"] = $('[name="telefon"]').val();
      dataSend["companie"] = $('[name="companie"]').val();

      $.ajax({
        url: url,
        type: 'POST',
        data: dataSend
      })  
      .done(function() {
        $('[name="AddtoCalendar"]').css("display", "none");
        $(".addtocalendar").css("display", "inline-block");
        $(".atcb-link").html("Adauga Eveniment in Calendar");
        $("#indicatie-alegere-calendar").text("Apasati din nou pe buton pentru a selecta tipul de calendar in care doriti sa adaugati evenimentul!");
      })
      .fail(function() {
        
      });

      
    }
    else {
      alert("Va rugam completati campurile nume si email!");
    }

  });

  // Afisare criteriu sortare dupa redirectionare

  $(".sort a").on('click', function() {
    $('.sort a').removeClass('active');
    $(this).addClass('active');
  });

  var currentCompanyLetter = getQueryVariable("Index");

  $('.sort a').each(function(){
    var value = $(this).attr("data-letter");
    if (value === currentCompanyLetter) {
      $(this).addClass("active");
    }
  }); 

 // Generare url



  // -- Comentat , conflict cu scriptul filters.js --
   $('[name="CategoryID"]').on("change", function() {
       var pageID = $('#filtersForm').attr('data-page-id');
      var url = "/Default.aspx?ID=" + pageID;
      var pageLink = $('.filtrare').attr('data-page-link');
    var value = $(this).val();
    
    var newUrl = replaceUrlParam(pageLink, "GroupID", value);
  
   window.location.href = newUrl;
    
     });
  
  
  $('[name="SortareNrProduse"]').on("change", function() {
       var sortare = "?SortBy=NameSortable&SortDirection=";
      var url = "/Default.aspx?ID=" + sortare;
      var pageLink = "/Default.aspx?ID=4218&SortBy=NameSortable&SortDirection="
    var value = $(this).val();
     console.log(pageLink);
    var newUrl = replaceUrlParam(pageLink, "SortDirection", value);
  
   window.location.href = newUrl;
    
     });
  
  
  
  

  $('#btn-toate-categoriile-geo').on('click', function() {
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = "";
    var pageLink = $('.filtrare').attr('data-page-link');
    var newUrl = replaceUrlParam(pageLink, "Geo", value);
    window.location.href = newUrl;
  });
  

  /* Generare url pentru checkbox */

  var newUrlGlobal = "";
  var filterArrayRelevantaGeografica = [];

  $('[name="Geo"] input[type="checkbox"]').on("click", function(){
    var isChecked = $(this).is(":checked") ? true : false;
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = $(this).attr('name');
  var pageLink = $('.filtrare').attr('data-page-link');
    
    if (isChecked) {
      filterArrayRelevantaGeografica.push(value);
    } 
    else {
      filterArrayRelevantaGeografica = _.remove(filterArrayRelevantaGeografica, function(val) {return val != value});
    }

    var arguments = filterArrayRelevantaGeografica.join(",");
    newUrlGlobal = replaceUrlParam(pageLink, "Geo", arguments);
    // console.log(newUrlGlobal);

  });

  $('#btn-filtrare-geo').on('click', function() {
    window.location.href = newUrlGlobal;
  });

  /* */
  /*Generare Url pentru selectia tuturor filtrelor de nationalitate*/
  $('#btn-toate-categoriile-nationalitate').on('click', function() {
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = "";
    var pageLink = $('.filtrare').attr('data-page-link');
    var newUrl = replaceUrlParam(pageLink, "Nationalitate", value);
    window.location.href = newUrl;
  });
  
  /* */
  
  /*Generare Url pentru Nationalitate*/
   var new1UrlGlobal = "";
  var filterArrayNationalitate = [];

  $('[name="Nationalitate"] input[type="checkbox"]').on("click", function(){
    var isChecked = $(this).is(":checked") ? true : false;
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var pageLink = $('.filtrare').attr('data-page-link');
    var value = $(this).attr('name');
  
 

    if (isChecked) {
      filterArrayNationalitate.push(value);
    } 
    else {
      filterArrayNationalitate = _.remove(filterArrayNationalitate, function(val) {return val != value});
    }

    var arguments = filterArrayNationalitate.join(",");
    new1UrlGlobal = replaceUrlParam(pageLink, "Nationalitate", arguments);
    new1UrlGlobal = new1UrlGlobal + "&Brand=true";
     console.log(new1UrlGlobal);

  });

  $('#btn-filtrare-nationalitate').on('click', function() {
    window.location.href = new1UrlGlobal;
    
  });

   /* */
  
  /*Generare Url pentru selectia tuturor filtrelor de Tip*/
  $('#btn-toate-categoriile-TipCompanie').on('click', function() {
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = "";
    var pageLink = $('.filtrare').attr('data-page-link');
    var newUrl = replaceUrlParam(pageLink, "Tip", value);
    window.location.href = newUrl;
  });
  
  /* */
  
  /*Generare Url pentru tip*/
   var newUrlGlobal = "";
  var filterArrayTipCompanie = [];

  $('[name="TipCompanie"] .tip-companie-js').on("click", function(){
   
    var pageID = $('.filtrare').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = $(this).attr('name');
    var pageLink = $('.filtrare').attr('data-page-link');
    
    
    
      filterArrayTipCompanie.push(value);
    

    var arguments = filterArrayTipCompanie.join(",");
    new3UrlGlobal = replaceUrlParam(pageLink, "Tip", arguments);
    // console.log(new2UrlGlobal);
    window.location.href = new3UrlGlobal;

  });

/*
  $('#btn-filtrare-TipCompanie').on('click', function() {
    
  });
*/
   /* */


  $('.sortare-litere a').on('click', function(event) {
    event.preventDefault();
    var pageID = $('.sortare-litere').attr('data-page-id');
    var url = "/Default.aspx?ID=" + pageID;
    var value = $(this).attr("data-letter");
    var newUrl = replaceUrlParam(url, "Index", value);
    window.location.href = newUrl;
  });

  $(".product-search button").on('click', function() {
    var url = "/Default.aspx?ID=4228";
    var value = $(".product-search input").val();
    var newUrl = replaceUrlParam(url, "q", value);
    window.location.href = newUrl;
  });
  
  $(".company-search button").on('click', function() {
    var url = "/Default.aspx?ID=4218";
    var value = $(".company-search input").val();
    var newUrl = replaceUrlParam(url, "q", value);
    window.location.href = newUrl;
  });

  // Formular de contact - Hidden field cu linkul catre articol

  $("#buton-modal-cere-detalii").on('click', function() {
    $("#Link").val(window.location.href);
  });

  //Twitter

  // twttr.widgets.load(); 


  $('.sticky').Stickyfill();
  
  $(document).ready(function(){
  
  
   var urlarticole = $('.js-articole-companie').attr('data-id-companie');
  var urlstiri = $('.js-stiri-companie').attr('data-id-companie');
  var butonstiri = "/stiri?Companie=" + urlstiri;
   var butonarticole =   "/articole?Companie=" + urlarticole;
    
   $.ajax({
        url: '/articole-companii?Companie=' + urlarticole,
        type: 'GET',
        
      })  
      .done(function(response) {
            var $response=$(response);
          
            _.map($response,function(value,key){
                  
           
                  
                    if(_.includes($(value).html(), "block-title-js")){
                     $('.js-titlu-articole').html(value);
                      
                   }
                  
                  if(_.includes($(value).html(), "news-block")){
                     $('.js-content-articole').html(value);
                    }
                  
                if(_.includes($(value).html(), "btn")){
                    
                      
                      $(value).children().attr("href",butonarticole);
                    
                       $('.js-buton-articole').html(value);
                      }
              
                });
          imageResize();
        
      })
      .fail(function() {
        
      });
    
  
  
  $.ajax({
        url: '/stiri-companii?Companie=' + urlstiri,
        type: 'GET',
        
      })  
      .done(function(response) {
            var $response=$(response);
          
            _.map($response,function(value,key){
                  
           
                  
                    if(_.includes($(value).html(), "block-title")){
                     $('.js-titlu-stiri').html(value);
                     
                   }
                  
                  if(_.includes($(value).html(), "news-block")){
                     $('.js-content-stiri').html(value);
                    }
              
                
                  if(_.includes($(value).html(), "btn")){
                    
                      
                    $(value).children().attr("href",butonstiri);
                    
                       $('.js-buton-stiri').html(value);
                      }
                  
                });
          imageResize();
        
      })
      .fail(function() {
        
      });
  
  
  
  
  
  
  
  
});


  
});


//GeoLocation 

$(document).ready( function(){
  
    var map = $(".premium-map-canvas");
    var pin = $(".premium-map-marker");
    var location = map.attr('data-geolocation');
   if(location){
    var locationObj = JSON.parse(location);
  
    
  map.attr("data-lat", locationObj.Lat);
  map.attr("data-lng", locationObj.Lng);
  pin.attr("data-lat", locationObj.Lat);
  pin.attr("data-lng", locationObj.Lng);
   }
     
});


$(document).ready(function(){
    
    var form = $(".form-wrapper");
    var companie = $("input[name=Companie]");
    companie.val(form.attr("data-nume"));

    // align the product search with asc-desc sort dropdown
    $("input[name='search-products']").css('margin-top' , '1.7em');
});



      
                 
        $(".buton-afisare-filtru").on("click",function(){
      var target = $(this).attr("data-target");
      var filtru = $("#"+ target);
        var siblings = filtru.siblings(".sibling");
            
         
          $.each(siblings,function(){
              $(this).addClass("hide");     
          });
          
     
          
          if(filtru.hasClass("hide")){
            
            filtru.removeClass("hide");
            
          }else{
            
            filtru.addClass("hide"); 
            
          }
          
  
});          
                  
                  



$(".js-star-rating").hover(function(){
    var stars = $(".js-star-rating");
    var rating = $(this).attr("data-rating");
   
     
     stars.each(function(){
       
      if($(this).attr("data-rating") <= rating){
          
           $(this).css('color','gold');
        }
       
       if($(this).attr("data-rating") > rating){
                
                       $(this).css('color','#ccc');
       }
       
     
     });
     
   },function(){
     
    var stars = $(".js-star-rating");
    var ratingInput = $('[name="Comment.Rating"]') 
    var rating = $(this).attr("data-rating");
    var ratingInputValue = ratingInput.attr("value");
    
    
     if(ratingInputValue == ""){ 
       
          stars.css('color','#ccc');
          
       
     }else{
       
          stars.each(function(){
            
              
              if($(this).attr("data-rating") <= ratingInputValue){
                
                       $(this).css('color','gold');
                  }
              
              
              if($(this).attr("data-rating") > ratingInputValue){
                
                       $(this).css('color','#ccc');
                  }
              
            
            });
         
     
     }
     
   });
  
   
   $(".js-star-rating").click(function(){
  
      var rating = $(this).attr("data-rating");
      var ratingInput = $('[name="Comment.Rating"]');
      
      ratingInput.attr("value",rating);
    
     
     
      var stars = $(".js-star-rating");
      

          stars.each(function(){

              if($(this).attr("data-rating") < rating){

                   $(this).css('color','gold');
              }
            
              if($(this).attr("data-rating") > rating){

                     $(this).css('color','#ccc');
              }

          });
    
  });



$('.titlu-js').each(function(){
	var nextElement = $(this).next(".result-query");
  	var coloane = nextElement.find('.col-companie');
  	if(coloane.length == 0){
      
     	$(this).addClass('hidden');
    }
 	
  		

});


$('.catalog-link-js').click(function(){

 if($(this).attr('data-loggedin') == "False"){
  	alert('Pentru a vedea cataloagele de produse va rugam sa va logati'); 
 }

});




$(document).ready(function(){

  	$(".videoGallery").fancybox({
     autoDimensions: true
		});
  

});

 // Storing products object in localSorage
 fcn_compareProducts: function(str_action, str_product) {
         /*
          str_action
          - add // add key
          - remove // remove key
          - compare // verify if key exists
          - consult // Consult Localstorage
          */

         var obj_retrievedObject = JSON.parse(localStorage.getItem(str_projectFolder + '_productsToCompare')),
             fcn_save = function(obj_toSave) {
                 // clear localstorage
                 localStorage.removeItem(str_projectFolder + '_productsToCompare');
                 // add to localstorage
                 localStorage.setItem(str_projectFolder + '_productsToCompare', JSON.stringify(obj_toSave));
             },
             fcn_add = function() {
                 // If *_productsToCompare Not Exists - Create
                 if (obj_retrievedObject == undefined) {
                     obj_retrievedObject = {
                         productsToCompare: [str_product]
                     };

                     fcn_save(obj_retrievedObject);
                 }
                 // If Exists - Push
                 else {
                     if (obj_retrievedObject.productsToCompare.indexOf(str_product) < 0) {
                         obj_retrievedObject.productsToCompare.push(str_product);
                         fcn_save(obj_retrievedObject);
                     }
                 }
             },
             fcn_compare = function() {
                 return obj_retrievedObject.productsToCompare.indexOf(str_product) > -1;
             },
             fcn_remove = function() {
                 if (fcn_compare()) {
                     obj_retrievedObject.productsToCompare.splice(
                         obj_retrievedObject.productsToCompare.indexOf(str_product),
                         1);
                     fcn_save(obj_retrievedObject);
                 }
             },
             fcn_consult = function() {
                 return JSON.parse(localStorage.getItem(str_projectFolder + '_productsToCompare'));
             };

         switch (str_action) {
             case "add":
                 fcn_add();
                 break;
             case "remove":
                 fcn_remove();
                 break;
             case "compare":
                 return fcn_compare();
                 break;
             case "consult":
                 return fcn_consult();
                 break;
         }

     },
     // Header Search - Autocomplete
     fcn_typeAhead: function() {
         var $obj_productId = $("#searchForm input[name=ProductID]"),
             $obj_inputText = $("#searchSubmit"),
             $obj_form = $("#searchForm"),
             str_pruductHref = "/Default.aspx?ID=" + $obj_form.find("input[name=ID]").val() + "&ProductID=",
             num_resultsCount,
             fcn_autocomplete = function() {
                 $obj_inputText.unbind("keydown").bind("keydown",
                     function(event) {
                         if ((event.keyCode === $.ui.keyCode.ENTER || event.keyCode === $.ui.keyCode.TAB) && $(this).data("ui-autocomplete").menu.active) {
                             event.preventDefault();
                         }
                     }).autocomplete({
                     minLength: 2,
                     appendTo: "#autocompleteWrap",
                     source: function(request, response) {
                         $.ajax({
                             url: obj_pages.str_typeAhead,
                             data: {
                                 q: $("#searchSubmit").val()
                             },
                             dataType: "json",
                             success: function(data) {
                                 num_resultsCount = data.Settings.TotalOfProducts;
                                 response(data.Products);
                             }
                         });
                     },
                     focus: function(event, ui) {
                         return false;
                     },
                     select: function(event, ui) {
                         this.value = ui.item.ProductName;
                         $obj_productId.val(ui.item.ProductId);
                         $obj_form.submit();
                         return false;
                     },
                     change: function(event, ui) {
                         if (ui.item == null || ui.item == undefined) {
                             //this.value = '';
                         }
                     },
                     close: function() {
                         $("#autocompleteWrap").removeClass("active");
                     },
                     open: function() {
                         var count = parseInt(num_resultsCount) > $('.ui-autocomplete > li').length ? num_resultsCount : $('.ui-autocomplete > li').length;
                         $("#autocompleteWrap").addClass("active");
                         $(".ui-autocomplete").append("<div class='moreProductsSearch'><a class='submitSearch' href='#'><span>" + obj_translates.str_seeAll + " '" + count + "' " + obj_translates.str_results + "</span></a></div>");
                         $(".submitSearch").unbind("click").click(function(event) {
                             event.preventDefault();

                             $obj_form.submit();
                         });
                     },
                     search: function() {
                         //                $(this).data("uiAutocomplete").menu.element.scrollTop(0);
                     }
                 }).data("ui-autocomplete")._renderItem = function(ul, item) {
                     str_pruductHref = str_pruductHref + item.ProductId;
                     return $("<li>").append("<figure class='text-center col-xs-3 noPadding'><img class='img-responsive' src='" + item.ProductImage + "' /></figure>" + "<div class='col-xs-9 noPaddingRight'><h2>" + item.ProductName + "</h2><span>" + item.ProductNumber + "</span></div>").appendTo(ul);
                 };
             },
             fcn_formSubmit = function() {
                 $obj_form.submit(function() {
                     loading(true);
                     if ($obj_productId.val() == "") {
                         $obj_productId.prop("disabled", true);
                     }
                     return true;
                 });
             };

         if ($obj_form.length) {
             fcn_formSubmit();
             fcn_autocomplete();
         }
     }
 };

 function onLoadCompareDetail() {
     var fcn_resize = function() {
             if (obj_globalOptions.obj_strings.str_deviceDim == "xs") {
                 num_el = 1;
             } else if (obj_globalOptions.obj_strings.str_deviceDim == "sm") {
                 num_el = 2;
             } else if (obj_globalOptions.obj_strings.str_deviceDim == "md") {
                 num_el = 3;
             } else {
                 num_el = 4;
             }

             for (var i = 0; i < $("#compareDetailList > li > div").length; i++) {
                 normalizeListItemHeight("#compareDetailList > li > .div_" + i, num_el);
             }
         },
         fcn_addToCompare = function() {
             var $obj_removeItem = $(".removeItem");

             $obj_removeItem.click(function() {
                 var $obj_this = $(this),
                     $obj_interest = $("#ofInterest");

                 ShareIT.Ecommerce.fcn_compareProducts("remove", $obj_this.attr("data-link"));

                 $obj_this.closest("li").remove();
                 history.pushState({},
                     '',
                     window.location.href.replace($obj_this.attr("data-link"), "").replace(",,", ","));
                 if ($("#compareDetailList > li").length <= 3) {
                     $obj_interest.find(".btn").attr("href", (window.location.href + "," + $obj_interest.find(".btn").attr("data-link")).replace(",,", ","));
                     $obj_interest.removeClass("hidden");
                 }
                 if ($("#compareDetailList > li").length <= 2) {
                     $obj_removeItem.remove();
                 }
             });
         },
         fcn_compare = function() {
             var $obj_highlightDifferences = $("#highlightDifferences"),
                 $obj_list = $("#compareDetailList"),
                 num_elements = $obj_list.find("li:last>div").not(".noCompare"),
                 $obj_li = $obj_list.find(">li").not(".noCompare");

             $obj_highlightDifferences.unbind("click").click(function() {
                 var str_temp;

                 if (!$(this).hasClass("active")) {
                     $(this).addClass("active");
                     $(this).html($(this).attr("data-remove"));
                     for (var div = 0; div < num_elements.length; div++) {
                         str_temp = null;

                         for (var li = 0; li < $obj_li.length; li++) {
                             var str_divText = $obj_list.find("li").not(".noCompare").eq(li).find(">div")
                                 .not(".noCompare")
                                 .eq(div).text();

                             if (str_temp == null) {
                                 str_temp = str_divText;
                             } else {
                                 if (str_temp != str_divText) {
                                     $("." + num_elements.eq(div).attr("class")).addClass("bgColor");
                                     break;
                                 }
                             }
                         }
                     }
                 } else {
                     $(this).html($(this).attr("data-add"));
                     $("#compareDetailList .bgColor").removeClass("bgColor");
                     $(this).removeClass("active");
                 }

             });

         },
         fcn_addToCart = function($obj_this) {
             var obj_ajax;

             loading(true);
             if (typeof obj_ajax != "undefined") {
                 obj_ajax.abort();
             }

             obj_ajax = $.ajax({
                 url: $obj_this.closest("form").attr("action"),
                 data: $obj_this.closest("form").serialize(),
                 success: function(obj_data) {},
                 complete: function() {
                     loading(false);
                     $obj_this.find("span").html($obj_this.find("span").attr("data-added"));
                     $obj_this.addClass("highlighted");

                     setTimeout(function() {
                             $obj_this.find("span").html($obj_this.find("span").attr("data-add"));
                             $obj_this.removeClass("highlighted");
                         },
                         3000);
                     minicart();
                 }
             });
         },
         fcn_backButton = function() {
             /*if (localStorage.getItem(str_projectFolder + '_lastProdPage') != undefined) {
                 $(".goBack").click(function(event) {
                     event.preventDefault();
                     window.location = localStorage.getItem(str_projectFolder + '_lastProdPage');
                 });
             } else {
                 $(".goBack").hide()
             }*/
         };

     fcn_addToCompare();
     fcn_compare();
     fcn_backButton();
     // add to cart
     $(".addToCart").unbind("click").click(function(event) {
         event.preventDefault();
         fcn_addToCart($(this));
     });

     setTimeout(function() {
             fcn_resize();
         },
         200);
     $(window).resize(function() {
         setTimeout(function() {
                 fcn_resize();
             },
             200);
     });

 }
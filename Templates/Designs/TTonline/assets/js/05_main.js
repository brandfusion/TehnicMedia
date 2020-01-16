/**
 * Description: general javascript actions and functions that should be present at all times
 * User: ShareIT
 * Date: 12/Jan/2016
 **/

$(function () {

    $('body').on("click","#imgThumbs img", function(e){
        e.preventDefault();
        //console.log("click");
        var image = $(this).attr("data-image");
        var bigimage = $(this).attr("data-image-big");
        $('#product-lg-image img').eq(1).attr("src", bigimage);
        $('#product-lg-image img').eq(0).attr("src", image);
      });

      // thumbsSlider = $('#imgThumbs > ul').bxSlider({
      //   slideMargin:0,
      //   autoReload:true,
      //   controls:true,
      //   infiniteLoop:false,
      //   breaks:[
      //     {screen:0, slides:2, pager:false},
      //     {screen:460, slides:3},
      //     {screen:768, slides:4}
      //   ],
      //   pager:false,
      //   hideControlOnEnd:true
      // });


      $('#NewsletterSubscribe').on("submit", function(e){
        e.preventDefault();
        var messageSuccess = $(this).attr("data-success");
        var sendData = {};
        sendData.UserManagement_Form_Email = $(this).find("#UserManagement_Form_Email").val();
        $.ajax({
          url: '/Default.aspx?ID=195',
          type: 'POST',      
          data: $('#NewsletterSubscribe').serialize()
        })
        .done(function(response) {
          // console.log("success");
          alert(messageSuccess)
        })
        .fail(function() {
          console.log("error");
        });
        
      });

      function zoomMainImage() {
        if($(window).width() >= 1280) {
           $('img[data-zoom]').each(function(){
            var zoomImage= $(this).attr("data-zoom");
            $(this).wrap('<span style="display:inline-block"></span>')
            .css('display', 'block')
            .parent()
            .zoom({url: zoomImage});
          });
        }
    }
    zoomMainImage();
    $(window).resize(function(){
      zoomMainImage();
    });


    // todo For Development
    developmentTools();

    //onLoadMakeAdjustments();
    contactUsPopup();
    loadTranslates();
   // fixedMenu();
    ShareIT.Ecommerce.fcn_typeAhead();
});

obj_globalOptions.obj_objects.$obj_window.load(function () { // Window load
});

function onLoadMakeAdjustments() {
    var obj_adjustments = {};

    obj_adjustments.addClass = function ($obj_el, str_class, bol_loop) {
        if (!bol_loop) $obj_el.addClass(str_class);
        else {
            for (var i = 0, el; el = $obj_el[i]; i++) {
                $(el).addClass(str_class);
            }
        }
    };
    obj_adjustments.removeClass = function ($obj_el, str_class, bol_loop) {
        if (!bol_loop) $obj_el.addClass(str_class);
        else {
            for (var i = 0, el; el = $obj_el[i]; i++) {
                $(el).removeClass(str_class);
            }
        }
    };
    obj_adjustments.submenu = function ($obj_el) {
        if (obj_globalOptions.obj_objects.$obj_window.width() >= 992 && !$("#menuMain > li > .container-fluid").length) {
            for (var i = 0, el; el = $obj_el[i]; i++) {
                $(el).find(" > ul").wrap("<div class='container-fluid'><div class='subMenuHolder'><div class='container'></div></div></div>");
            }
        }
        else if (obj_globalOptions.obj_objects.$obj_window.width() < 992 && $("#menuMain > li > .container-fluid").length) {
            for (var ii = 0, el2; el2 = $obj_el[ii]; ii++) {
                $(el2).find(" > ul.col-xs-4 li").appendTo($(el2).find("ul.pageLevel2").appendTo($(el2)));
                $(el2).find(".container-fluid").remove();
                obj_adjustments.addClass($("#menuMain > li > ul.pageLevel2"), "dropdown-menu", true);
            }
        }
        $(".subMenuHolder ul").removeClass("dropdown-menu");
        $(".subMenuHolder > div > ul > li").addClass("col-xs-4");
    };
    obj_adjustments.login = function () {
        if (!$(".logged_True").length) {
            var obj_login = $("#masterExtUserForm:first"),
                $obj_fieldset,
                $obj_liLogin = $("li.login");

            $obj_liLogin.append(obj_login);
            $obj_fieldset = $("li #masterExtUserForm fieldset");
            for (var i = 0; i < $obj_fieldset.length; i++) {
                $obj_fieldset.eq(i).find("input").attr("placeholder", $obj_fieldset.eq(i).find("label").text());
            }
            obj_login.removeClass("hidden");
            onLoadLoginForm("#masterExtUserForm");
            $obj_liLogin.find("input[type=email]").focus(function () {
                $obj_liLogin.addClass('active');
            });

            $obj_liLogin.find("input[type=email]").blur(function () {
                if ($obj_liLogin.hasClass('active')) {
                    $obj_liLogin.removeClass('active');
                }
            });

            obj_login.find("input").focus(function() {
                $(this).closest("form").addClass("activePerFocus");
            });
            obj_login.find("input").blur(function() {
                setTimeout(function() {
                    if (!obj_login.find("input:focus").length) {
                        obj_login.closest("form").removeClass("activePerFocus");
                    }
                },200);
            });
        }
    },
    obj_adjustments.paragraphTextTables = function () {
            var $obj_tables = $(".paragraphText table").not(".noResponsive");

            for (var i = 0; i < $obj_tables.length; i++) {
                var $obj_td = $obj_tables.eq(i).find("tbody tr > *"),
                    count = -1;

                for (var a = 0; a < $obj_td.length; a++) {
                    if (count >= $obj_tables.eq(i).find("thead th").length -1) {
                        count = 0;
                    }
                    else {
                        count++;
                    }
                    $obj_td.eq(a).attr("data-th", $obj_tables.eq(i).find("thead th").eq(count).html());
                }
            }
        };
    obj_adjustments.init = function () {
        // TODO Remove all live searches because of IE11
        $("select").removeAttr("data-live-search");

        obj_adjustments.submenu($("#menuMain > li[data-dropdown='True']"));
        obj_adjustments.login();
        obj_adjustments.paragraphTextTables();
        $("#goBack").click(function (event) {
            event.preventDefault();
            window.location = window.history.back();
        });

        $("#serviceMenuContainer .search").click(function (e) {
            e.preventDefault();
            $("#serviceMenuContainer #searchForm").toggle();
            $("#serviceMenuContainer #searchSubmit").focus();
        });
        $("#serviceMenuContainer #searchForm .fa-close").click(function (e) {
            e.preventDefault();
            console.log('fa-close');
            $("#serviceMenuContainer #searchForm").toggle();
        });

        $(window).resize(function () {
            obj_adjustments.submenu($("#menuMain > li[data-dropdown='True']"));
        });

    };
    //Run
    obj_adjustments.init();

}

function contactUsPopup() {
    if (obj_settings.str_contactTimeout != "" && $.cookie(str_projectFolder + "_contact") == null) {
        var time = parseInt(obj_settings.str_contactTimeout);

        $.cookie(str_projectFolder + "_contact", "true", { expires:1 });
        setTimeout(function () {
            $.ajax({
                type:"GET",
                url:obj_pages.str_contactPopup,
                dataType:"html",
                success:function (obj_data) {
                    $.fancybox($(obj_data).html());

                    $(".fancybox-inner .DMForms").submit(function () {
                        requestAjax({
                            str_url:obj_pages.str_contactPopup,
                            obj_data:$(this).serialize(),
                            str_type:"post",
                            fnc_callback:function (obj_response) {
                                $.fancybox($(obj_response).html());
                            }
                        });
                        return false;
                    });
                }
            });
        }, time);
    }
}

function fixedMenu() {
    var $obj_nav = $("#mainNavContainer").parent(),
        $obj_login = $("body.logged_True li.login"),
        $obj_link = $obj_login.find("a"),
        $obj_icon = $obj_link.find("span");

    $(window).scroll(function () {
        if ($(this).scrollTop() > $("#topHeaderContainer").outerHeight()) {
            $obj_nav.addClass("f-nav");
            $("#headerContainer").css("margin-bottom", ($("#mainNavContainer").height() + 30 )+"px")
        }
        else {
            $obj_nav.removeClass("f-nav");
            $("#headerContainer").removeAttr("style");
        }
    });

    $obj_link.html($obj_login.find("ul a:first").html());
    $obj_link.prepend($obj_icon);
    
    // 3rd level menu
    var $submenuList = $("#subMenu li");
    if (obj_globalOptions.obj_strings.str_deviceDim != "xs" && obj_globalOptions.obj_strings.str_deviceDim != "sm") {
        
        $submenuList.width((100 / $submenuList.length) + "%");
    }
    else {
        $submenuList.removeAttr("style");
    }
}

function loadTranslates() {
    /*
     This function loads the global translations.
     The translations are in a DW page, inside the "Ajax pages" page.
     */
    if (localStorage.getItem(str_projectFolder + '_translations') == null) {
        requestAjax({
            str_url:obj_pages.str_globalTranslates,
            obj_data:"translates=true",
            str_type:"get",
            fnc_callback:function (obj_response) {
                parseScript(obj_response);
                localStorage.setItem(str_projectFolder + '_translations', obj_response);
            }
        });
    }else{
        parseScript(localStorage.getItem(str_projectFolder + '_translations'));
    }

}

/* general z-index loading -- loading(true) / loading(false) */
function loading(bol_action) {
    var $obj_overLoading = $("#overLoading");

    if (bol_action) {
        if (!$obj_overLoading.length) {
            $("body").prepend("<div id='overLoading'><img src='/Files/Templates/Designs/" + str_projectFolder + "/images/ajaxLoader.gif' /></div>");
        }
        else {
            $obj_overLoading.show();
        }

    }
    else {
        $obj_overLoading.hide();
    }
}

function onLoadVideoLightBox() {
    ShareIT.obj_helpers.fancybox($(".fancybox"));
}

/* Development tools */
function developmentTools() {
    if ($(".demoMode").length) {
        checkDemoMode();
        //onLoadScreenSize();
        //guideLines(12);
    }
}
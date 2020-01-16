$(document).ready(function(){


	
	showTooltipster = function(arg,message){
		/* 
			Usage: showTooltipster($(this),"A tooltip message");
			Behaviour: Show tooltips with Tooltipster that are triggered on demand and fade out after 2500ms
		*/
		$(arg).tooltipster({
	      content: message,
	   		animation: 'fade',
	   		theme: 'tooltipster-theme',
	   		arrowColor: '#000',
	   		trigger: "custom"
	    });
		$(arg).tooltipster("show");
		setTimeout(function(){
	   	$(arg).tooltipster("hide");
	  }, 2500);
	} 


	displayActiveFields = function(arg, option){
		/*
			Usage: displayActiveFields($('targetelement'),"option"); Ex: displayActiveFields($('[data-filter]'),"Alba");
			Behvaiour: Triggers show/hide events on a form based on an option !Events must be previously declared in document.ready!
		*/

		$(arg).each(function(){
			var string = $(this).attr("data-filter"); // !hardcoded - what attribute value to take 
			var inputList = [];
      if (string.search(option) > -1) {
        $(this).trigger("data-visible");       
      } else {
        $(this).trigger("data-hidden");
      }
    });
	} 

	

	verifyRequirement = function(arg){
		/* 
		  Usage: verifyRequirement($(element));
			Behaviour: Verifies if a condition has been met for the next step to take place 
			!!! Used if a general requirement can be made throughout the page. Atm it just checks value which can be done with $(arg).val() !!!			
		*/
		var target = $(arg).val();
		if (target !== "") {
			return true;
		}
		return false;
	} 


	///END FUNCTIONS


	//Main Thread
	var form = $('[name="UserManagementEditForm"]');

	form.find("input, textarea").on("focusout", function(e){
		validateField($(this));
	});
	form.find("select").on("change", function(){
		validateField($(this));
	});
	$('#UserManagement_Form_NewPasswordConfirm').on("focusout", function(){
		verifyPasswords('#UserManagement_Form_NewPassword','#UserManagement_Form_NewPasswordConfirm');
	});
	$('#UserManagement_Form_NewPassword').on("focusout", function(){		
		var confirmValue = $('#UserManagement_Form_NewPasswordConfirm').val();
		if (confirmValue !== "") {
			verifyPasswords('#UserManagement_Form_NewPassword','#UserManagement_Form_NewPasswordConfirm');
		}
		
	});

	//On Submit Click	
	form.find(".action").on("click", function(e){		
		// e.preventDefault();	
		var fullName = $('#UserManagement_Form_LastName').val() + ' ' + $('#UserManagement_Form_FirstName').val();
		var userName = $('#UserManagement_Form_Email').val();
		var sendForm = 0;
		$('#UserManagement_Form_Name').val(fullName);
		$('#UserManagement_Form_UserName').val(userName);

				
		form.find('input[type="text"], input[type="password"], select, textarea').each(function(){
			var value = $(this).val();
			var name = $(this).attr("name");
			var requiredMessage = $(this).attr("data-required-message");
			if (value === "" || value === null) {
				sendForm++
				$(this).addClass("input-invalid");
				$(this).attr("placeholder",requiredMessage);
			}

		});

		
		
		if (sendForm !== 0) {
			return false;
		}
		
		var terms = $('#terms').prop("checked");		
		if (terms !== true) {
			// alert("Message");
			alertify.alert($("#terms").attr("data-warning"));
			return false;
		}

	});


  var errorDivHasChildren = $("#errors").children().length;

  if ( errorDivHasChildren > 0 ) {
  	$("#errors").addClass("visible");
  }

  


});
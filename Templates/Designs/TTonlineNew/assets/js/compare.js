function populateCompareList(group, value){
		$.ajax({
			url:'Default.aspx?ID=6934' +'&q='+ value,
			type:'GET'
			})
			.done(function(response){				
				if(response){
					var output = '<div class="results">';
					var data = response;	
					console.log(data);
					_.map(data, function(o){
						output += '<div id="'+ o.id +'" class="compare-item media"  nume="'+ o.name +'" imagine="'+ o.image +'">';
						output += '<div class="media-left"><div class="media-object"><img src="/Admin/Public/GetImage.ashx?Image='+ o.image +'&Format=jpg&Width=45&Height=45&Compression=90&Crop=0" class="media-object" /></div></div>';
						output += '<div class="media-body">';
						output += '<p>'+o.name+'</p>';
						output += '<p>'+o.number+'</p>';
						output += '</div>';
						output += '</div>';
					});				
					// $.each(data, function(i, v){
					// 	var value = v.split(",");						
					// 	var name = value[0];
					// 	var image = value[2];
					// 	output += '<li id="'+ i +'" class="compare-item"  nume="'+ name +'" imagine="'+ image +'"><img src="/Admin/Public/GetImage.ashx?Image='+ image +'&Format=jpg&Width=45&Height=45&Compression=90&Crop=0" />'+ name +'</li>';
					// });
					output += "</div>";
					$("#compare_results").html(output);
				} else {
					$("#compare_results").html("");
				}
			})
			.fail(function() {
				console.log("error");
			});
	}

var Compare = {
	data: [],
	addCompareToCookie: function(){},
	changeCompareLink: function(){
		var $el = $('.btn-compara');
		var href = $el.attr("data-href");
		var idList = "";
		_.map(this.data, function(o){
			idList += o.id + ",";
		});
		$el.attr("href", href + idList);
	},
	findCompareObject: function(id){
		var filteredArray = _.filter(this.data, function(o){ return o.id == id});
		var arrayHasItem = _.size(filteredArray) !== 0 ? true : false;
		return arrayHasItem;
	},
	addCompareItem: function(obj){		
		if (!this.findCompareObject(obj.id)) {
			this.data.push(obj);
		}	else {
			// showNoty({text: "Produsul este deja adaugat in lista de comparare.", type: "warning", timeout: 2000});
		}	
	},
	deleteCompareItem: function(id){
		var dataFiltered = _.filter(this.data, function(o){ return o.id !== id});
		this.data = dataFiltered;
		this.renderCompareList();
	},
	renderCompareItem: function(o){
		var output = "";
		output += '<div class="item" data-toggle="tooltip" title="'+ o.name +'">';
		output += '<img src="'+ o.image +'"/>'
		output += '<button class="delete-item" data-item-id="'+ o.id +'"><i class="fa fa-close"></i></button>';
		output += '</div>';
		$('#compare-render-content').append(output);
	},
	renderCompareList: function(){
		$('#compare-render-content').empty();
		var that = this;
		if (_.size(this.data) > 1) {
			_.map(this.data, function(o){
				that.renderCompareItem(o);
			});
			if(!$('#compare-block').hasClass("open")) {
				$('#compare-block').addClass("open");
			}
		} 
		if (_.size(this.data) <= 1) {
			this.data = [];
			$('#compare-block').removeClass("open");
		}
		this.changeCompareLink();
		
	}
}



$(function(){

	var currentProduct = {};
	currentProduct.name = $('[data-page="Product Detail"]').attr("data-product-name");
	currentProduct.id = $('[data-page="Product Detail"]').attr("data-product-id");
	currentProduct.image = $('[data-page="Product Detail"]').attr("data-product-image");

	//events
	$('#compare-block').on("click", ".delete-item", function(e){
		e.preventDefault();
		var value = $(this).attr("data-item-id");
		Compare.deleteCompareItem(value);
	});
	$('#compare_results').on("click", ".compare-item", function(e){
		e.preventDefault();
		var id = $(this).attr("id");	
		var name = $(this).attr("nume");
		var image = $(this).find("img").attr("src");
		var obj = {};
		obj.id = id;		
		obj.name = name;
		obj.image = image;
		if(_.size(Compare.data) === 0){
			Compare.addCompareItem(currentProduct);
			Compare.addCompareItem(obj);
		} else if(_.size(Compare.data) < 3){
			Compare.addCompareItem(obj);
		} else {
			showNoty({text: "Ati introdus numarul maxim de produse ce pot fi comparate.", type: "error", timeout: 2000});
		}		
		Compare.renderCompareList();		
		
	})
	$("#product-compare").on("keyup", function(){
		if($(this).val() !== "") {
			var group = $(this).attr("data-group");
			var value = $(this).val();
			populateCompareList(group,value);
		} else {
			$('#compare_results').empty();
		}
		
	});
	// $('#product-compare').on("focusout", function(){		
	// 		$('#compare_results').fadeOut("300");
	// });
	$('#product-compare').on("focusin", function(){
		$('#compare_results').fadeIn("300");
	});
	$('#product-compare').on("mouseenter", function(){
		$('#compare_results').fadeIn("300");
	});
	$('#compare_results').on("mouseleave", function(){
		$('#compare_results').fadeOut("300");
	});



});

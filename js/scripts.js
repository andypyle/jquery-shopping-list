$(document).ready(function(){
	var listContainer = $('.shopping-list');
	var addBtn = $('.add-item');
	var itemInput = $('#itemInput');
	var item = "";

	function addItem(item){
		var toAdd = "<li class='row'>" +
					"<div class='col s12'>" +
						"<p class='flow-text'>" +
						item +
							"<span class='right item-btns'>" +
								"<a href='#!' class='btn-floating btn-flat hide-on-med-and-up btn-show'><i class='cyan-text mdi-navigation-more-horiz'></i></a>" +
								"<a href='#!' class='btn-floating red lighten-2 hide-on-small-only btn-delete'><i class='mdi-navigation-close'></i></a>" +
								"<a href='#!' class='btn-floating green lighten-2 hide-on-small-only btn-check'><i class='mdi-navigation-check'></i></a>" +							
							"</span>" +
						"</p>" +
					"</div>" +
				"</li>";

		var newItem = $.parseHTML(toAdd);
		$(newItem)
			.addClass('dismissable')
			.hide()
			.appendTo(listContainer)
			.fadeIn();
	}
	
$('#searchbox input').bind('keypress', function(e) {
	if(e.keyCode==13){
		// Enter pressed... do anything here...
	}
});

	addBtn.click(function(){
		var itemText = itemInput.val();
		if(!itemText.length){
			Materialize.toast('Please type an item name!', 2000, 'red darken-4');
		} else {
			addItem(itemText);
		}
		
		itemInput.val('');
	})

	itemInput.bind('keydown', function(e){
		var itemText = itemInput.val();
		if(e.which==13){
			if(!itemText.length){
				Materialize.toast('Please type an item name!', 2000, 'red darken-4');
			} else {
				addItem(itemText);
			}		
		itemInput.val('');
		}
	})

	listContainer.on('click', '.btn-check', function(){
		$(this)
		.parent('span')
			.parent('p')
			.addClass('done');
	})

	listContainer.on('click', '.btn-delete', function(){
		$(this)
		.parent('span')
			.parent('p')
			.parent('div')
			.parent('li')
			.fadeOut();
	})

	listContainer.on('click', '.btn-show', function(){
		otherBtns = $(this).nextAll('a');
		$(this).fadeOut(100, function(){
			otherBtns.removeClass('hide-on-small-only');
		});
		
	})
})
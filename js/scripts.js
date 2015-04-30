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
							"<span class='right'>" +
								"<a href='#!' class='btn-floating btn-flat hide-on-med-and-up btn-show'><i class='cyan-text mdi-navigation-more-horiz'></i></a>" +
								"<a href='#!' class='btn-floating red lighten-2 hide-on-small-only btn-delete'><i class='mdi-navigation-close'></i></a>" +
								"<a href='#!' class='btn-floating green lighten-2 hide-on-small-only btn-check'><i class='mdi-navigation-check'></i></a>" +							
							"</span>" +
						"</p>" +
					"</div>" +
				"</li>";

		var newItem = $.parseHTML(toAdd);
		$(newItem).hide().appendTo(listContainer).fadeIn();
		//newItem.fadeIn();
	}
	


	addBtn.click(function(){
		var itemText = itemInput.val();
		addItem(itemText);
		itemInput.val('');
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
	

	/*
	listContainer
		.append("<li>")
			.addClass("row")
		.append("<div>")
			.addClass("col s12")
		.append("<p>")
			.addClass("flow-text")
				.append("asdfasdf")
		.append("<span>")
			.addClass("right")
		.append("<a href='#!'>")
			.addClass("btn-floating btn-flat hide-on-med-and-up")
				.append("<i>")
					.addClass("cyan-text mdi-navigation-more-horiz")
				.append("</li>")
			.append("</a>")
		.append("<a href='#!'>")
			.addClass("btn-floating red lighten-2 hide-on-small-only")
				.append('<i>')
					.addClass("mdi-navigation-close")
				.append("</li>")
			.append("</a>")
		.append("<a href='#!'>")
			.addClass("btn-floating green lighten-2 hide-on-small-only")
				.append("<i>")
					.addClass("mdi-navigation-check")
				.append("</li>")
			.append("</a>")
		.append("</span>")
		.append("</p>")
		.append("</div>")
		.append("</li>");
	*/



	/*
	<li class="row">
		<div class="col s12">
			<p class="flow-text">Item 1
				<span class="right">
					<a href="#!" class="btn-floating btn-flat hide-on-med-and-up"><i class="cyan-text mdi-navigation-more-horiz"></i></a>
					<a href="#!" class="btn-floating red lighten-2 hide-on-small-only"><i class="mdi-navigation-close"></i></a>
					<a href="#!" class="btn-floating green lighten-2 hide-on-small-only"><i class="mdi-navigation-check"></i></a>									
				</span>
			</p>
		</div>
	</li>

			<li class='row'>
							<div class='col s12'>
								<p class='flow-text'>Item 4
									<span class='right'>
										<a href='#!' class='btn-floating btn-flat hide-on-med-and-up'><i class='cyan-text mdi-navigation-more-horiz'></i></a>
										<a href='#!' class='btn-floating red lighten-2 hide-on-small-only'><i class='mdi-navigation-close'></i></a>
										<a href='#!' class='btn-floating green lighten-2 hide-on-small-only'><i class='mdi-navigation-check'></i></a>									
									</span>
								</p>
							</div>
						</li>
	*/




})
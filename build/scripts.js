jQuery.noConflict();

(function($){

	// adding titles and alt`s to img tags
	var imgTitles = {
		init: function(settings){
			// default imgs - '.service-items'
			imgTitles.config = {
				classGroup: 'service'
			};

			$.extend(imgTitles.config, settings);
			imgTitles.setup();
		},

		setup: function(){

			var link = checkclassGroup( imgTitles.config.classGroup );
			var defaultclassGroup = null;

			// check if imgs have default group
			function checkclassGroup(classGroup){
				return ( classGroup == 'service' ) ? imgTitles.addDefaults() : imgTitles.addNotDefaults();
			};
		},

		// if they are default
		addDefaults: function(){
			var links = $( imgTitles.config.item ).find('a');
			links.each( imgTitles.addAltsAndTitles );;
		},

		// if they are`t default
		addNotDefaults: function(){
			var links = $( imgTitles.config.item ).find('a').not('[class]').find('span');
			links.each( imgTitles.addAltsAndTitles );
		},

		// adding alt and title for each img
		addAltsAndTitles: function(){
			var link = $( this );
			var img = link.closest( imgTitles.config.item ).find('img');
			img.attr( { 'alt': link.text(), 'title' : link.text() });
		}
	};

	imgTitles.init({
		item: '.item-content',
		classGroup: 'category'
	});

	imgTitles.init({
		item: '.service-item'
	});

	// control lenght of line adding three dots
	// code in "dots" object is equal to two strings below
	// $('.left-menu-content').children('li').children('a').addClass('r');
	// $('.item-content').children('a').children('span').addClass('r');
	var dots = {
		init: function(array){
			dots.arr = array || null;
			if( dots.arr != null){
				$.each( dots.arr , dots.addDots );
			}
		},

		addDots: function(){
			var arr = $( this );

			var className = "$('"+ arr[0] + "')";
			for(var i = 1, l = arr.length; i < l; i++){
				className += "." + "children('" + arr[i] + "')";
			}
			className += ".addClass('r');";

			//this code below is equal to right one $(className).children( arr[1] ).children( arr[2] ).addClass('r');
			eval(className);
			//console.log(className);
		}
	}

	dots.init([
		['.left-menu-content', 'li', 'a'],
		['.item-content', 'a', 'span']
	]);



})(jQuery);


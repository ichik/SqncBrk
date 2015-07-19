(function() {
	var bLazy = new Blazy({
		breakpoints: [{
			width: 420 // max-width
			, src: 'data-src-small'
		}
		, {
			width: 1024 // max-width
			, src: 'data-src-medium'
		}]	
	});
})();

(function() {
	var morphSearch = document.getElementById( 'morphSearch' ),
		input = morphSearch.querySelector( 'input.morphsearch-input' ),
		ctrlClose = document.getElementById( 'open-button' );
		// show/hide search area
		addSearch = function(evt) {
			morphSearch.className=morphSearch.className + " open";
		};
		removeSearch = function(evt) {
			morphSearch.className=morphSearch.className.replace(" open", "");
			input.blur();
			if( input.value !== '' ) {
				setTimeout(function() {
					input.value = '';
				}, 500);
			}
		};
		// events
		input.addEventListener( 'focus', addSearch );
		input.addEventListener( 'blur', removeSearch );
		ctrlClose.addEventListener( 'click', removeSearch );
		// esc key closes search overlay
		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27) {
				removeSearch(ev);
			}
		} );
})();
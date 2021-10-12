
$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 1000,
	  values: [ 0, 1000 ],
	  slide: function( event, ui ) {
		$( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        console.log(ui.values[ 0 ]);
        console.log(ui.values[ 1 ]);
	  }
	});
	$( "#amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
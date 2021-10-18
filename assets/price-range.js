
$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 200,
	  values: [ 0, 200 ],
	  slide: function( event, ui ) {
		$( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $( "#lower-value" ).text( ui.values[ 0 ] );
        $( "#higher-value" ).text( ui.values[ 1 ] );

        
        $('.product-collection-card').each(function() {
        var product_price = $(this).data('price');
        $(this).addClass('out-of-range-min');
        if( product_price >= ui.values[ 0 ] && product_price <= ui.values[ 1 ]) {
          $(this).removeClass('out-of-range-min');
        }
      });
        
        
	  }
	});
  $( "#amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) +
                      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

  $("#lower-value").text($( "#slider-range" ).slider( "values", 0 ));
  $("#higher-value").text($( "#slider-range" ).slider( "values", 1 ));

  
});
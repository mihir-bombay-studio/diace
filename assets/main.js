
// Accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("panel-bottom-border");
    } else {
      var new_height = panel.scrollHeight + 16;
      panel.style.maxHeight = new_height + "px";
      panel.classList.add("panel-bottom-border");
    } 
    this.classList.toggle("active");
  });
}

// filter by tags and range script

  $('.collection-tag').click(function() {
   	$(this).toggleClass("underline-selected");
  	var filter_tag = $(this).data('tfilter');
    $('.product-collection-card').toggleClass('no-disp');
    $('.product-collection-card').each(function() {
      var string = $(this).data('tag');
      var tag = string.split(',');
      if( $.inArray(filter_tag, tag) != -1 ) {
        $(this).removeClass('no-disp');
      }
    });
    
  });


  $('.article_filter_tag').click(function() {
    console.log("filtering..")
  	var bfilter_tag = $(this).data('bfilter');
    $('.blogs').toggleClass('no-disp');
    $('.blogs').each(function() {
      var bstring = $(this).data('btag');
      var btag = bstring.split(',');
      if( $.inArray(bfilter_tag, btag) != -1 ) {
        $(this).removeClass('no-disp');
      }
    });
    
  });
  
  let min = 0;
  let max = 100;

  const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

  $('#rangeMin').on('input', function(e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
    $('#min').html(newValue);
    $('#line').css({
      'left': calcLeftPosition(newValue) + '%',
      'right': (100 - calcLeftPosition(max)) + '%'
    });
    $('.product-collection-card').each(function() {
      var product_price = $(this).data('price');
      var new_val = newValue * 100;
      console.log(product_price);
      $(this).addClass('out-of-range-min');
      if( product_price >= new_val ) {
        $(this).removeClass('out-of-range-min');
      }
    });
  });

  $('#rangeMax').on('input', function(e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
    $('#max').html(newValue);
    $('#line').css({
      'left': calcLeftPosition(min) + '%',
      'right': (100 - calcLeftPosition(newValue)) + '%'
    });
    $('.product-collection-card').each(function() {
      var product_price = $(this).data('price');
      var new_val = newValue * 100;
      console.log(product_price);
      $(this).addClass('out-of-range-max');
      if( product_price <= new_val ) {
        $(this).removeClass('out-of-range-max');
      }
    });
  });
  
  
  $('.check-box-wrapper').click(function() {
  	$(this).toggleClass('selected');
  });
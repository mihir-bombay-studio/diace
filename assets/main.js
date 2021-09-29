
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
  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;


var a = [];
const btns=document.querySelectorAll('.product-collection-card[data-price]');
var price = [...btns].forEach(btn =>  a.push(btn.getAttribute('data-price')));
const max_price = Math.max(...a);

const max_price_deci = max_price / 100.00;
var ranger_max = document.getElementById("myRange").max = max_price_deci;
console.log(max_price_deci);


if (max_price < 100){
  document.getElementById("myRange").max = 100;
}else if(max_price >= 100){
  console.log(ranger_max);
  ranger_max = 1000;
}else{
  ranger_max = 10000;
}


  slider.oninput = function() {
    var range_op = output.innerHTML = this.value * 100;
    console.log(range_op)
    
     $('.product-collection-card').each(function() {
      var product_price = $(this).data('price');
      console.log(product_price);
      $(this).addClass('out-of-range-min');
      if( product_price <= range_op ) {
        $(this).removeClass('out-of-range-min');
      }
    });
  }

    $('.check-box-wrapper').click(function() {
      $(this).toggleClass('selected');
    });

// $("#account").click(function(){
//   $("#account .login-wrapper").toggleClass("header-nav-list-sub");
// });

$(document).mouseup(function(e) {
  let menu = $('.login-wrapper');
  if (e.target.id === "account-btn" || $("#account-btn").has(e.target).length > 0) {
    console.log("clicked");
    $("#account-btn").toggleClass("active");
    $(".login-wrapper").toggleClass("active");
  }

  else if ((!menu.is(e.target) // The target of the click isn't the container.
            && menu.has(e.target).length === 0)) // Nor a child element of the container
  {
    console.log("notclicked");
    $(".login-wrapper").removeClass("active");
  }

});

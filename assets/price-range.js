(function() {

  var parent = document.querySelector(".price-slider");
  if(!parent) return;

  var
  rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;

      document.getElementById("lower-value").innerHTML = slide1;
      document.getElementById("higher-value").innerHTML = slide2;
      $('.product-collection-card').each(function() {
        var product_price = $(this).data('price');
        console.log(product_price)
              $(this).addClass('out-of-range-min');
        //       if( product_price <= range_op ) {
        //         $(this).removeClass('out-of-range-min');
        //       }
      });

    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();
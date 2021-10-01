var a = [];
const btns=document.querySelectorAll('.product-collection-card[data-price]');
var price = [...btns].forEach(btn =>  a.push(btn.getAttribute('data-price')));
const max_price = Math.max(...a);


const max_price_deci = max_price;
console.log(max_price_deci);
var max_range_1 = document.getElementsByClassName("max-range-value")[0].max;
var max_range_2 = document.getElementsByClassName("max-range-value")[1].max;
console.log(max_range_1);
console.log(max_range_2);

if (max_price_deci < 100){
//   document.getElementsByClassName("max-range-value")[0].max = 100; 
  document.getElementsByClassName("max-range-value")[1].max = 100;
  document.getElementsByClassName("max-range-value")[0].value = 100;
//   document.getElementsByClassName("max-range-value")[1].value = 100;
  document.getElementById("lower-value").innerHTML = 0;
  document.getElementById("higher-value").innerHTML = 100;
}
else
{
//   document.getElementsByClassName("max-range-value")[0].max = 1000; 
  document.getElementsByClassName("max-range-value")[1].max = 1000;
  document.getElementsByClassName("max-range-value")[0].value = 1000;
//   document.getElementsByClassName("max-range-value")[1].value = 1000;

}
   

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
//         console.log(product_price);
        $(this).addClass('out-of-range-min');
        if( product_price >= slide1 && product_price <= slide2) {
          $(this).removeClass('out-of-range-min');
        }
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
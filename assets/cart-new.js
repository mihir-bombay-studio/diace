// Function for close the Cart
function openCart() {
  $(".cart-mask").addClass("active");
}
function toggleCart() {
  $(".cart-mask").toggleClass("active");
}

// Function for close the Cart
function closeCart() {
  $(".cart-mask").removeClass("active");
}

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeCart();
  }
});

$(".cart-toggler, .cart-close").click(function(){
  toggleCart();
})

$(document).mouseup(function (e) {
  let cart = $('.cart-container');
  if ((!cart.is(e.target) // The target of the click isn't the container.
       && cart.has(e.target).length === 0)) // Nor a child element of the container
  {
    closeCart();
  }

});



$("body").on('click', '.AddToCart', function () {
  let variant_id = parseInt($(this).data('variant-id'));
   console.log(variant_id);
//   let formData = {
//     'items': [{
//       'id': ,
//       'quantity': 1
//     }]
//   };

//   $.ajax({
//     url: "/cart/add.js",
//     method: "POST",
//     dataType: "json",
//     data: formData,
//   })
//   .done(function (data) {
//     get_full_cart();
   
//   })
//   .fail(function (error) {
//     console.log(error);
//   });
  
});
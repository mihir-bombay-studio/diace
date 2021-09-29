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


$(document).mouseup(function (e) {
  let cart = $('.cart-container');
  console.log((e.target.className).is("cart-toggler"));
  if (e.target.id === "cart_toggler") {
    toggleCart();
  }

  else if ((!cart.is(e.target) // The target of the click isn't the container.
            && cart.has(e.target).length === 0) || e.target.id === "cart_close") // Nor a child element of the container
  {
    closeCart();
  }

});
// $(".cart-toggler").click(function(){

// toggleCart();
// })
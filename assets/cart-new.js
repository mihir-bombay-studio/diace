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


//change the opacity of the element for eg. while updating an elements quantity in cart
function reduceOpacity(element_id){

  $(`#${element_id}`).animate({
    opacity: '0.3'
  }, 300);

}

function fullOpacity(element_id){

  $(`#${element_id}`).animate({
    opacity: '1'
  }, 300);

}

$('.qty-minus').click(function() {
  var data_qty = parseInt($(this).next().data('qty'));
  if( data_qty != 1 )
  {
    data_qty = data_qty - 1;
    $(this).next().data('qty', data_qty);
    $(this).next().html(data_qty);
  }
});

$('.qty-plus').click(function() {
  var data_qty = parseInt($(this).prev().data('qty'));
  data_qty = data_qty + 1;
  $(this).prev().data('qty', data_qty);
  $(this).prev().html(data_qty);
});





$("body").on('click', '.AddToCart', function () {
  let variant_id = parseInt($(this).data('variant-id'));
  let variant_quantity = $(this).data('quantity') != "" ? $(this).data('quantity') : $("#product_quantity");
  console.log(variant_id);
  let formData = {
    'items': [{
      'id': variant_id,
      'quantity': 1
    }]
  };

  $.ajax({
    url: "/cart/add.js",
    method: "POST",
    dataType: "json",
    data: formData,
  })
  .done(function (data) {
   
  })
  .fail(function (error) {
    console.log(error);
  });
  
});



function delete_item(variant_id){
  reduceOpacity(`cart_item_${variant_id}`);

  let delete_data = {
    'id': variant_id,
    'quantity': 0
  }


  $.ajax({
    url: `/cart/change.js`,
    method: "POST",
    dataType: "json",
    data: delete_data,
  })
  .done(function(data){
    console.log(data);
    $(`#cart_item_${variant_id}`).fadeOut('slow');
    variant_id == upsell.id ? $(".upsell-container").fadeIn('slow') : null;
  })
  .fail(function() {
    console.log( "failed to delete" );

  });

}

$("#cart_container").on( "click", ".remove-item", function() {
  let variant_id = parseInt($(this).data('variant-id'));
  delete_item(variant_id);
});
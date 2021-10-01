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
  let variant_id = parseInt($(this).data('variant-id'));
  if( data_qty != 1 )
  {
    data_qty = data_qty - 1;
    $(this).next().data('qty', data_qty);
    $(this).next().html(data_qty);
    UpdateCart(variant_id);
  }else{
  	delete_item(variant_id);
  }
});

$('.qty-plus').click(function() {
  var data_qty = parseInt($(this).prev().data('qty'));
  let variant_id = parseInt($(this).data('variant-id'));
  data_qty = data_qty + 1;
  $(this).prev().data('qty', data_qty);
  $(this).prev().html(data_qty);
  UpdateCart(variant_id);
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
    variant_id == upsell.id ? $("#cart_container .upsell-container").fadeOut('slow') : null;
  })
  .fail(function (error) {
    console.log(error);
  });
  
});




function UpdateCart(variant_id){
  $("#cart_container").addClass("block-cursor");
  reduceOpacity(`cart_item_${variant_id}`);
  let update_quantity = $(`#item_count_${variant_id}`).data("qty");
//   let price = $(`#line_price_${update_id}`).data("price");

  if(update_quantity > 0){
    let update_data = {

      'id': parseInt(`${variant_id}`),
      'quantity': parseInt(`${update_quantity}`),

    }

    $.ajax({
      url:`/cart/change.js`,
      method: "POST",
      dataType: "json",
      data: update_data,

    }).done(function(data){

      console.log(data);
      $(`#item_count_${variant_id}`).text(update_quantity);
//       $('#sub_total').text(`€ ${data.total_price/100} EUR`);
//       $(`#line_price_${update_id}`).text(`€ ${(price*update_quantity)/100} EUR`);
//       cart_item_count(data);
      fullOpacity(`cart_item_${variant_id}`);
      $("#cart_container").removeClass("block-cursor");

    }).fail(function() {
      console.log( "failed to update" );

    });

  }
  else{

    delete_item(variant_id);
  }
}



function delete_item(variant_id){
  $("#cart_container").addClass("block-cursor");
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
    variant_id == upsell.id ? $("#cart_container .upsell-container").fadeIn('slow') : null;
    $("#cart_container").removeClass("block-cursor");
  })
  .fail(function() {
    console.log( "failed to delete" );

  });

}


$("#cart_container").on( "click", ".remove-item", function() {
  let variant_id = parseInt($(this).data('variant-id'));
  delete_item(variant_id);
});
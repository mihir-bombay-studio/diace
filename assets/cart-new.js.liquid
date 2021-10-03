// Function for close the Cart
function openCart() {
  $(".cart-mask").fadeIn("slow");
  $(".cart-mask").addClass("active");
}
function toggleCart() {
  $(".cart-mask").fadeToggle("slow");
  $(".cart-mask").toggleClass("active");
}

// Function for close the Cart
function closeCart() {
  $(".cart-mask").fadeOut("slow");
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
$("#cart_container").on( "click", ".qty-minus", function() {
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

$("#cart_container").on( "click", ".qty-plus", function() {
  var data_qty = parseInt($(this).prev().data('qty'));
  let variant_id = parseInt($(this).data('variant-id'));
  data_qty = data_qty + 1;
  $(this).prev().data('qty', data_qty);
  $(this).prev().html(data_qty);
  UpdateCart(variant_id);
});


// function to update the cart item quantity in navbar
function cartItemCount(cart){
  if (cart.item_count > 0){
    $("#cart-quantity").removeClass("no-disp");
    $("#cart-quantity").text(`${cart.item_count}`);
  }
  else{
    $("#cart-quantity").addClass("no-disp");
    $("#cart-quantity").text("");
  }
}

function getCartDetails(){
  jQuery.getJSON('/cart.js', function(cart) {
     // update quantity of cart items
    cartItemCount(cart);
    refreshCart(cart);
  });
}


function refreshCart(cart) {
  let upsellHandle = $("#cart_container").data("handle");
  let items = cart.items;
  let output = "";

  if (cart.item_count > 0) {
    output += `<div class="cart-list">`;
    for (var i = 0; i < items.length; i++) {
      let item = cart.items[i];
      upsellHandle === item.handle ? $("#cart_container").addClass("hide-upsell") : null;
      output += `
        <div id="cart_item_${item.variant_id}" class="list-item ${i}">
          <a href="${item.url}" class="product-img">
            <img class="cart-item__image"
                src="${item.image}"
                alt="${item.product_title}"
                loading="lazy"
                width="75"
                height="75"
                >
          </a>
          <div class="product-info">
            <div class="product-name semibold"><a href="${item.url}">${item.product_title}</a></div>
            <div class="flex-box justify-between">
              <div class="product-variant">${item.variant_title != "Default Title" ? item.variant_title : null}</div>
              <div class="count">
                <span data-variant-id="${item.variant_id}" class="qty-minus cart-minus-icon">-</span>
                <span id="item_count_${item.variant_id}" class="item-count-number" data-qty="${item.quantity}">${item.quantity}</span>
                <span data-variant-id="${item.variant_id}" class="qty-plus cart-plus-icon ">+</span>
              </div>
            </div>
            <div class="item-price">
              
              <span class="discount-price semibold">${item.price}</span>
            </div>
            <button data-variant-id="${item.variant_id}" class="remove-item">verwijderen <span class="dustbin"></span></button>
          </div>
        </div>`;
    }

    output += `</div >`;
    output += `<div id="upsell_item_${current_variant.id}" class="upsell-container">
      <div class="upsell-heading semibold">Mensen kochten ook:</div>
      <div class="list-item">
        <a href="${upsell.url}" class="product-img">
          <img 
              src="${upsell.image}" 
              alt="${upsell.title}" 
              class="upsell-img" 
              loading="lazy"
              >
        </a>
        <div class="product-info">
          <div class="product-name semibold"><a href="${upsell.url}">${upsell.title}</a></div>
          <div class="flex-box justify-between">
            <div class="product-variant">${current_variant.title != "Default Title" ? current_variant.title : null}</div>
          </div>
          <div class="item-price flex-box justify-between">
            <div class="">`;
              current_variant.compare_at_price ? output += `<span class="compare-at-price"> ${current_variant.compare_at_price} </span>` : null
              output += `<span class="discount-price semibold">${current_variant.price}</span>
            </div>
            <button 
                    class="add-upsell-btn semibold AddToCart"
                    data-variant-id = "${current_variant.id}"
                    data-quantity = ""
                    > 
              <span class="plus-circle">+</span> 
              <span class="add-upsell-btn-text">Toevoegen</span> 
            </button>
          </div>
        </div>
      </div>
    </div>`;

output += `
    <div class="cart-footer">
      <div class="cart-calculation">
        <div class="flex-box justify-between">
          <div class="subtotal-label light">subtotal</div>
          <div id="sub_total_price" class="subtotal-price semibold">${(cart.total_price / 100).toFixed(2)}</div>
        </div>
        <div class="flex-box justify-between">
          <div class="dispatch-label light">Verzending</div>
          <div class="dispatch-msg semibold">Berekend in volgende stap</div>
        </div>
      </div>
      <a href="/checkout" class="checkout-btn">checkout</a>
      <div class="text-center">
        <a href="/" class="continue-shop underline-link">Verder winkelen</a>
      </div>
    </div>`;
  } else {
    output += `
      <div class="cart-empty-state">
        <div class="empty-msg">
          <div class="empty-state-heading semibold">Er zit nog niets in je mandje</div>
          <div class="empty-state-img">
            
          </div>
        </div>
        <div class="empty-state-links">
          <a href="#" class="empty-state-link">
            OPBERGEN
            <span class="">
              
            </span>
          </a>
          <a href="#" class="empty-state-link">
            STICKERS
            <span class="">
              
            </span>
          </a>
          <a href="#" class="btn btn-yellow category-btn">BEKIJK ALLE CATEGORIEËN</a>
        </div>
      </div>`;
  }
  $('#cart_body_wrapper').html(output);
}





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
  .done(function (cart) {
    variant_id == upsell.id ? $("#cart_container .upsell-container").fadeOut('slow') : null;
    getCartDetails();
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

    }).done(function(cart){

      console.log(cart);
      $(`#item_count_${variant_id}`).text(update_quantity);
      cartItemCount(cart);
      refreshCart(cart);
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
  .done(function(cart){
    console.log(cart);
    $(`#cart_item_${variant_id}`).fadeOut('slow');
    
    if(variant_id == upsell.id){ 
      $("#cart_container .upsell-container").fadeIn('slow'); 
      $("#cart_container").removeClass("hide-upsell");
    }
    cartItemCount(cart);
    refreshCart(cart);
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
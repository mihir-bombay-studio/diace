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
  let output ="";
output += ` 
    <div class="cart-list">
      
    </div>
    <div class="upsell-container">
      <div class="upsell-heading semibold">Mensen kochten ook:</div>
      <div class="list-item">
        <a href="/" class="product-img">.</a>
        <div class="product-info">
          <div class="product-name semibold"><a href="/">Product name</a></div>
          <div class="flex-box justify-between">
            <div class="product-variant">Variant</div>
          </div>
          <div class="item-price flex-box justify-between">
            <div class="">
              <span class="compare-at-price">€ 00,00</span>
              <span class="discount-price semibold">€ 00,00</span>
            </div>
            <button class="add-upsell-btn semibold"> 
              <span class="plus-circle">+</span> 
              <span class="add-upsell-btn-text">Toevoegen</span> 
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-calculation">
        <div class="flex-box justify-between">
          <div class="subtotal-label light">subtotal</div>
          <div id="sub_total_price" class="subtotal-price semibold"></div>
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
    </div>
   
    `;

    $('#cart_body_wrapper').html();
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


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
    
    <div class="cart-empty-state">
      <div class="empty-msg">
        <div class="empty-state-heading semibold">Er zit nog niets in je mandje</div>
        <div class="empty-state-img">
          Liquid error: This liquid context does not allow includes.
        </div>
      </div>
      <div class="empty-state-links">
        <a href="#" class="empty-state-link">
          OPBERGEN
          <span class="">
            Liquid error: This liquid context does not allow includes.
          </span>
        </a>
        <a href="#" class="empty-state-link">
          STICKERS
          <span class="">
            Liquid error: This liquid context does not allow includes.
          </span>
        </a>
        <a href="#" class="btn btn-yellow category-btn">BEKIJK ALLE CATEGORIEËN</a>
      </div>
    </div>
    
    `;

    $('#cart_body_wrapper').html(output);
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


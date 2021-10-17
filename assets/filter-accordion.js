var acc = document.getElementsByClassName("filter-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
  if(acc.length > 0) {
    acc[i].classList.add("active");
    acc[i].nextElementSibling.style.maxHeight  = acc[i].nextElementSibling.scrollHeight + "px";
  }
}


$('.filter-by-tags .filter-option').click(function () {
  $(this).toggleClass('filteredselected');
  runFilter();
});


function runFilter() {
  var gender = [];
  var size = [];
  var type = [];
  var brand = [];
  var classString = "";
  $(".gender.filteredselected").each(function (index) {
    gender.push($(this).data('value'));
  });
  $(".size.filteredselected").each(function (index) {
    size.push($(this).data('value'));
  });
  $(".type.filteredselected").each(function (index) {
    type.push($(this).data('value'));
  });
  $(".brand.filteredselected").each(function (index) {
    brand.push($(this).data('value'));
  });

  var i;


  $('.product-collection-card').addClass('disp_no');



  if (gender.length > 0) {
    for (i = 0; i < gender.length; i++) {
      $('.product-collection-card.' + gender[i]).addClass('gp');
    }
  } else {
    $('.product-collection-card').addClass('gp');
  }

  if (size.length > 0) {
    for (i = 0; i < size.length; i++) {
      $('.product-collection-card.' + size[i]).addClass('sp');
    }
  } else {
    $('.product-collection-card').addClass('sp');
  }

  if (type.length > 0) {
    for (i = 0; i < type.length; i++) {
      $('.product-collection-card.' + type[i]).addClass('tp');
    }
  } else {
    $('.product-collection-card').addClass('tp');
  }

  if (brand.length > 0) {
    for (i = 0; i < brand.length; i++) {
      $('.product-collection-card.' + brand[i]).addClass('bp');
    }
  } else {
    $('.product-collection-card').addClass('bp');
  }


  $('.product-collection-card.gp.sp.tp.bp').removeClass('disp_no');
  $('.gp').removeClass('gp');
  $('.sp').removeClass('sp');
  $('.tp').removeClass('tp');
  $('.bp').removeClass('bp');
}
runFilter();



$(".variant-pop").click(function () {
  let id = $(this).data("prod-id");
  $(`#${id}`).toggleClass("flex");
  $(this).addClass("no-disp")
});

$("#filter-count").on("change",function(){
  let numOfProd = $(this).val();



  $(".collection").addClass("Loading");
  $(".loading-overlay").css("display" , "flex");

  setTimeout(function(){ 

    $(".collection").removeClass("Loading");
    $(".loading-overlay").css("display" , "none");
  }, 1000);

  $(".showing-items").html("Items " + numOfProd + " van " + 102);

  let a = [];

  let btns=document.querySelectorAll('.product-collection-card[title]');

  let price = [...btns].forEach(btn =>  a.push(btn.getAttribute('title')));


  a.length = numOfProd;


  $('.product-collection-card').each(function() {
    var title = $(this).attr('title');

    $(this).addClass('out-of-range-min');
    if( a.includes(title) ) {
      $(this).removeClass('out-of-range-min');
    }
  });




})


var current_page = 1;
var records_per_page = 25;

var objJson = []; 

let prod = document.querySelectorAll('.product-collection-card[title]');

let prodobj = [...prod].forEach(btnn =>  objJson.push({title : btnn.getAttribute('title')}));

console.log(objJson);

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += `<div class="collection ">
          <div class="loading-overlay">
            <div class="loading-overlay__spinner">
              <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
              </svg>
            </div>
          </div>
		
          <div class="product-collection flex-box">
            
              <div class="product-collection-card" id="main-collection-product-grid" data-id="{{ section.id }}" data-price="${objJson[i].price}" title="${objJson[i].price}" href="${objJson[i].url}">
                <div class="featured-product-img rel">
                 
                  <a href="${objJson[i].url}" ><img class="product-img" src="${objJson[i].Image}"></a>
                  
                  {% if product.has_only_default_variant %}
                  <div class="AddToCart product-hover-text flex-box align-center" data-variant-id="{{product.first_available_variant.id}}" data-quantity='1' >
                    <span class="plus-icon">{% include 'icon-yellow-plus' %}</span>
                    <span class="hover-text bold">KOPEN</span>
                  </div>
                  {% elsif  product.options_with_values.size > 1  %}
                   <div class="product-hover-text flex-box align-center">
                    <span class="plus-icon">{% include 'icon-yellow-plus' %}</span>
                    <a href="{{product.url}}" class="hover-text bold">KOPEN</a>
                  </div>
                  {% else %}
                
                  <div data-prod-id="{{product.handle}}" class="variant-pop product-hover-text flex-box align-center">
                    <span class="plus-icon">{% include 'icon-yellow-plus' %}</span>
                    <span class="hover-text bold">KOPEN</span>
                  </div>
                  {% endif %}
                  
                  {%- unless product.has_only_default_variant -%}
                  {% if product.options_with_values.size <= 1 %}
                  {%- for option in product.options_with_values -%}
                  {%- if option.name == "Kleur" or option.name == "Color" -%}
                  <div id="{{product.handle}}" class="product_coll_variant variant-options-wrapper">
                    <div class="color_wrapper">
                      {% for variant in product.variants limit:6 %}
                      <span data-success-id="success_{{product.handle}}" class="AddToCart" data-variant-id="{{variant.id}}" data-quantity="1">{{variant.title}}</span>
                      {% endfor %}
                    </div>
                  </div>
                  <span id ="success_{{product.handle}}" class="success_cart__message">TOEGEVOEGD  {% include "tick" %}</span>
                  
                  {% else %}
                  <div id="{{product.handle}}" class="other-variants">
                  	<div class="color_wrapper">
                      {% for variant in product.variants limit:6 %}
                      <span variant-option="{{variant.option2}}" data-success-id="success_{{product.handle}}" class="AddToCart" data-variant-id="{{variant.id}}" data-quantity="1">{{variant.title}}</span>
                      {% endfor %}
                    </div>
                  </div>
                   <span id ="success_{{product.handle}}" class="success_cart__message">TOEGEVOEGD  {% include "tick" %}</span>
                  {% endif %}
                  {% endfor %}
                  {% endif %}
                  {%- endunless -%}
               
                </div>
                <div class="product-title-price flex-box justify-between">
                  <div class="product-title semibold"><a href="{{product.url}}">{{ product.title | escape  | capitalize}}</a></div>
                  <div class="product-compare-to-and-price">
                    <span class="compare-to-price light">{{ product.compare_at_price | money }}</span>
                    <span class="product-price semibold{% if product.compare_at_price %} yellow-text{% endif %}">{{ product.price | money  }}</span>
                  </div>
                </div>
                
                

                <div class="product-colors flex-box justify-between light">
                  {% if product.has_only_default_variant %}   
                  <div class="product-color">
                    
                  </div>          
                  {% else %}
                  {% for variant in product.variants limit:1%}
                  {%- for option in product.options_with_values limit:1-%}
                  <div class="product-color">
                    <span>{{option.name}}: </span>
                    <span>
                      {{variant.title}}
                    </span>
                  </div>
                 {% endfor %}
                  {% endfor %}
                  <div class="other-available-colors">
                    <a class="featured-product-link" href="{{product.url}}">Meer kleuren beschikbaar</a>
                  </div>
                  {% endif %}
                </div>

              </div>
       
            {% endfor %}
          </div>
        </div>`;
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};











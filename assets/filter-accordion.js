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
  console.log(size);
  console.log(brand);
}
runFilter();



$(".variant-pop").click(function () {
$(".product_coll_variant").css("display" , "flex");

});


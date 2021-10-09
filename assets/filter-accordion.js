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
  var classString = "";
  $(".gender.filteredselected").each(function (index) {
    gender.push($(this).data('value'));
  });
  $(".size.filteredselected").each(function (index) {
    size.push($(this).data('value'));
  });
  
  var i;
  
  
  $('.product-collection-card').addClass('disp_no');
  
  
  
  if (gender.length > 0) {
    for (i = 0; i < gender.length; i++) {
      $('.product-collection-card.' + gender[i]).addClass('tp');
    }
  } else {
    $('.product-collection-card').addClass('tp');
  }
  
  if (size.length > 0) {
    for (i = 0; i < size.length; i++) {
      $('.product-collection-card.' + size[i]).addClass('sp');
    }
  } else {
    $('.product-collection-card').addClass('sp');
  }

  
  $('.product-collection-card.tp.sp').removeClass('disp_no');
  $('.tp').removeClass('tp');
  $('.sp').removeClass('sp');
  console.log(size);
}
runFilter();

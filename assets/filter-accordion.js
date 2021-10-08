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


$('.filter-by-tags .gender').click(function () {
  console.log("gender clicked");
  $(this).toggleClass('filteredselected');
 runFilter();
});


function runFilter() {
  var gender = [];
  var classString = "";
  $(".gender.filteredselected").each(function (index) {
    gender.push($(this).data('value'));
  });
  
  var i;
  
  
  $('.product-collection-card').addClass('no-disp');
  
  
  
  if (gender.length > 0) {
    for (i = 0; i < gender.length; i++) {
      $('.product-collection-card.' + gender[i]).addClass('tp');
    }
  } else {
    $('.product-collection-card').addClass('tp');
  }
  
  $('.product-collection-card.tp').removeClass('no-disp');
  $('.tp').removeClass('tp');
  console.log(gender);
}
runFilter();

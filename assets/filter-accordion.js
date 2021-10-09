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


  $('.product-collection-card').addClass('disp_no');



  if (gender.length > 0) {
    for (i = 0; i < gender.length; i++) {
//       $('.product-collection-card.' + gender[i]).addClass('tp');
      console.log($('.product-collection-card').data('gender'));
      if ($('.product-collection-card').data('gender') == " meisjes "){
        console.log("array value matched")
      }

    } 
  } else {
    $('.product-collection-card').addClass('tp');
  }


  $('.product-collection-card.tp').removeClass('disp_no');
  $('.tp').removeClass('tp');
  console.log(gender);
}
runFilter();

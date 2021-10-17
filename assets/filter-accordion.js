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

var records = 10;

paginator(records);

$("#filter-count").on("change",function(){
  let numOfProd = $(this).val();
  paginator(numOfProd);
})



function paginator(records_per_page){

  
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
      listing_table.innerHTML += `<p>${objJson[i].title}</p> <br>`;
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


}





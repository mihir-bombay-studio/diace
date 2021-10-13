// Mobile navigation
$(".menu-btn").click(function () {
  $(this).toggleClass("active");
  $("#mobile_nav_container").toggleClass("open-nav");
});


// toggle navbar if navlinks are clicked
var links = document.querySelectorAll('.mobile-nav-list li a');
var linksLength = links.length

for (var i = 0; i < linksLength; i++) {
  links[i].addEventListener('click', function () {
    closeMobileNav();
  });
}

function closeMobileNav(){
  $(".menu-btn").removeClass("active");
  $("#mobile_nav_container").removeClass("open-nav");
}




// Accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("panel-bottom-border");
    } else {
      var new_height = panel.scrollHeight + 16;
      panel.style.maxHeight = new_height + "px";
      panel.classList.add("panel-bottom-border");
    } 
    this.classList.toggle("active");
  });
}


// filter by tags and range script

$('.collection-tag').click(function() {
  $(this).toggleClass("underline-selected");
  var filter_tag = $(this).data('tfilter');
  $('.product-collection-card').toggleClass('no-disp');
  $('.product-collection-card').each(function() {
    var string = $(this).data('tag');
    var tag = string.split(',');
    if( $.inArray(filter_tag, tag) != -1 ) {
      $(this).removeClass('no-disp');
    }
  });

});


$('.article_filter_tag').click(function() {
  $(".article_filter_tag").removeClass("active-pill");

  $(this).addClass("active-pill");
  var bfilter_tag = $(this).data('bfilter');
  $('.blogs').addClass('no-disp');
  $('.blogs').each(function() {
    var bstring = $(this).data('btag');
    var btag = bstring.split(',');
    if( $.inArray(bfilter_tag, btag) != -1 ) {
      $(this).removeClass('no-disp');
    }
  });

});


$('.check-box-wrapper').click(function() {
  $(this).toggleClass('selected');
});


// $("#account").click(function(){
//   $("#account .login-wrapper").toggleClass("header-nav-list-sub");
// });

$(document).mouseup(function(e) {
  let menu = $('.login-wrapper');
  if (e.target.id === "account-btn" || $("#account-btn").has(e.target).length > 0) {
    console.log("clicked");
    $("#account-btn").toggleClass("active");
    $(".login-wrapper").toggleClass("active");
  }

  else if ((!menu.is(e.target) // The target of the click isn't the container.
            && menu.has(e.target).length === 0)) // Nor a child element of the container
  {
    console.log("notclicked");
    $(".login-wrapper").removeClass("active");
  }

});


$(".view-password").click(function() {

  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


//cookie code start
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var anouncement=getCookie("header-anouncement");
if (anouncement == "") {
  $('.header-anouncement').css('display','flex');
}
$('#header-anouncement-close').click(function(){
  $('.header-anouncement').css('display','none');
  setCookie("header-anouncement", "close", 1);
});


// collection tag script
$( document ).ready(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let tag = urlParams.get('tag');
  if(tag){
    tag = tag.replace(/\s+/g, '-').toLowerCase(); 
    $(`.tag-${tag}`).trigger( "click" );
    console.log(tag);
  }
});

// slide-up script
$('.go-up').click(function (event) {
  event.preventDefault();
  $('html').animate({ scrollTop: 0 },200,"linear");
});

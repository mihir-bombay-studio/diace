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


// cookie

if(!check_cookie_name("header-anouncement")){ 
  $(".header-anouncement").fadeIn("slow");
}else{
  $(".header-anouncement").fadeOut("slow");
//   $(".hero-block").css({"margin-top" : "80px", "height" : "calc(100vh - 80px)"});
}
$("#header-anouncement-close").click(function() {
  console.log("header-anouncement")
  setCookie("header-anouncement", "banner closed", 1);
  $(".header-anouncement").fadeOut("slow");
//   $(".hero-block").css({"margin-top" : "80px", "height" : "calc(100vh - 80px)"});
  return false;
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function check_cookie_name(announcement_name) 
{
  var match = document.cookie.match(new RegExp('(^| )' + announcement_name + '=([^;]+)'));
  if (match) {
    return true;
  }
  else{
    return false;
  }
}

function delete_cookie(announcement_name) {
  document.cookie = announcement_name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  if(!check_cookie_name("extra_banner")){ 
    $(".extra_banner").fadeIn("slow");
  }else{
    $(".extra_banner").fadeOut("slow");
  }
}
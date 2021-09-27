
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

// $("#account").click(function(){
//   $("#account .login-wrapper").toggleClass("header-nav-list-sub");
// });

$(document).mouseup(function(e) {
  let menu = $('.login-wrapper');
  if (e.target.id == "account") {
    console.log("clicked");
    $(".login-wrapper").toggleClass("active");
  }

  else if ((!menu.is(e.target) // The target of the click isn't the container.
            && menu.has(e.target).length === 0)) // Nor a child element of the container
  {
    console.log("notclicked");
     $(".login-wrapper").removeClass("active");
  }

});
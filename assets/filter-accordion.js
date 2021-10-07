var acc = document.getElementsByClassName("fiter-accordion");
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
}

if(acc.length > 0) {
  acc[0].classList.add("active");
  acc[0].nextElementSibling.style.maxHeight  = acc[0].nextElementSibling.scrollHeight + "px";
}
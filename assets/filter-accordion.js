var acc = document.getElementsByClassName("filter-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.add("accordian");
  });
}

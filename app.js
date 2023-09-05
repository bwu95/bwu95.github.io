window.addEventListener("scroll", function() {
  var header = document.querySelector("header"); 
  header.classList.toggle("sticky", window.scrollY > 0);

})


window.addEventListener("scroll", () => {
  const toTop = document.querySelector(".to-top"); 
  if(window.scrollY > 100) {
    toTop.classList.add("active"); 
  } else {
    toTop.classList.remove("active"); 
  }
})

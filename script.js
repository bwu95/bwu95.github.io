window.addEventListener("scroll", function() {
  var header = document.querySelector("header"); 
  header.classList.toggle("sticky", window.scrollY > 0);

})

window.addEventListener("scroll", () => {
  const toTop = document.querySelector(".to-top"); 

  /*------ Implement later, for const navigation color on page -------*/ 
  // const sections = document.querySelectorAll('section');
  // const navLinks = document.querySelectorAll('#nav-list a');

  if(window.scrollY > 100) {
    toTop.classList.add("active"); 
  } else {
    toTop.classList.remove("active"); 
  }


})

/* ------------ Hamburger Menu ------------ */ 
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleButton() {
    navList.classList.toggle('show')  
    menuIcon.classList.toggle('hide'); // Hide the hamburger icon
    closeIcon.classList.toggle('show'); // Show the close icon
}

hamburgerButton.addEventListener('click', toggleButton)
/* ------------ mobile compability ------------ */ 
// hamburgerButton.addEventListener('touchstart', toggleButton);
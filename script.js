const scrollTopBtn = document.getElementById("scrollTop");

scrollTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// Initializer for EmailJS
(function () {
  emailjs.init('h3mwLcn-TnDz6jnIj');
})();

// Form validation and sender for EmailJS
window.onload = function () {
  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_x7z95au', 'template_h79m2xb', '#myForm', 'h3mwLcn-TnDz6jnIj')
      .then(function () {
        console.log('SUCCESS!');
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
}


// Data toggler for Offcanvas - Bootstrap default behaviour scrolls back to top on close, this is to stop it.
document.addEventListener("DOMContentLoaded", function(){
  var myOffcanvas = document.getElementById('offcanvasScrolling');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("openMenu").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});


// CSS Animation Observer:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Will make the section visible when the intersection is reached via the show class
    } else {
      entry.target.classList.remove("show"); // Removes the classlist and the element from view when not intersecting.
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); // Telling it to observe each looped element to toggle the classlists.


const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

/*
Animated Cursor project
const cursor = document.querySelector(".cursor");

//follow cursor on mouse movement
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effect on mouseout
  document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
  }
  )


})*/



let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

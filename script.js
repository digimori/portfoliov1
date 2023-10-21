

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

function sendMail() {
          (function () {
            emailjs.init('h3mwLcn-TnDz6jnIj'); //Account public key, put this behind an env?.
          })();

          let params = {
            senderName: document.querySelector("#senderName").value,
            senderEmail: document.querySelector("#senderEmail").value,
            subject: document.querySelector("#subject").value,
            message: document.querySelector("#message").value
          };
          
          emailjs.send("service_x7z95au", "template_h79m2xb", params).then(res => {
            alert("Email send successfully") //Change to Toast?
          })
            .catch();
        }
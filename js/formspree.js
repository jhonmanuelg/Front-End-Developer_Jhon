var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        var mensajeModal =
            '<div class="modal_wrap">' +
            '<div class="mensaje_modal">' +
            "<h1>✔</h1> <h3>E-mail Enviado</h3>" +
            '<span id="btnClose">Cerrar</span>' +
            "</div>" +
            "</div>";
        
          $("body").append(mensajeModal);
        
        $("#btnClose").click(function () {
          $(".modal_wrap").remove();
        });
        form.reset();
        

      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
     
    })
    
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}






form.addEventListener("submit", handleSubmit);













// const $form = document.querySelector("#form");

// $form.addEventListener("submit", btnSend);

// async function btnSend(event) {
//   event.preventDefault();

//   const form = new FormData(this);
//   const response = await fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       'Accept': 'application/json'
//   })
//   if (response.ok) {
//     this.reset();
//     var mensajeModal =
//       '<div class="modal_wrap">' +
//       '<div class="mensaje_modal">' +
//       "<h1>✔</h1> <h3>E-mail Enviado</h3>" +
//       '<span id="btnClose">Cerrar</span>' +
//       "</div>" +
//       "</div>";

//     $("body").append(mensajeModal);
//   }
//   $("#btnClose").click(function () {
//     $(".modal_wrap").remove();
//   });
// }

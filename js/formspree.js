const $form = document.querySelector("#form");

$form.addEventListener("submit", handlesubmit);

async function handlesubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body : form,
    header: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    var mensajeModal =
    '<div class="modal_wrap">' +
    '<div class="mensaje_modal">' +
    "<h1>✔</h1> <h3>E-mail enviado com sucesso</h3>" +
    '<span id="btnClose">Cerrar</span>' +
    "</div>" +
    "</div>";

  $("body").append(mensajeModal);
  }
  $("#btnClose").click(function () {
    $(".modal_wrap").remove();
  });

}



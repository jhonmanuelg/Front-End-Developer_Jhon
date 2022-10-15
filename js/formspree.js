const $form = document.querySelector("#form");

$form.addEventListener("submit", btnSend);

async function btnSend(event) {
  event.preventDefault();

  const form = new FormData(this);
  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
  })
  if (response.ok) {
    this.reset();
    var mensajeModal =
      '<div class="modal_wrap">' +
      '<div class="mensaje_modal">' +
      "<h1>✔</h1> <h3>E-mail Enviado</h3>" +
      '<span id="btnClose">Cerrar</span>' +
      "</div>" +
      "</div>";

    $("body").append(mensajeModal);
  }
  $("#btnClose").click(function () {
    $(".modal_wrap").remove();
  });
}

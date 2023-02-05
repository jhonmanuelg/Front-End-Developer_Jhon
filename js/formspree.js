/*   formspree = en vio de archivo json */

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
  }).then((response) => {
    if (response.ok) {
      var mensajeModal =
        '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        "<h1>✔</h1> <h2>E-mail Enviado</h2>" +
        '<span id="btnClose">Cerrar</span>' +
        "</div>" +
        "</div>";

      $("body").append(mensajeModal);

      $("#btnClose").click(function () {
        $(".modal_wrap").remove();
      });
      form.reset();
    }
  });
}

/*   validacion del formulario */

$(document).ready(function () {

  $("#my-form-button").click(function () {   
    
    var errores = "";  
    

    // Validado Nombre ==============================
    if ($("#names").val() == "") {
      errores += "<p>Escreva seu nome</p>";
      $("#names").css("border-left-color", "#f9ca24");
    } else {
      $("#names").css("border-left-color", "#222");
    };

    // validar assunto =============================
    if ($("#assunto").val() == "") {
      errores += "<p>Escreva seu assunto</p>";
      $("#assunto").css("border-left-color", "#f9ca24");
    } else {
      $("#assunto").css("border-left-color", "#222");
    };

    // validar assunto =============================
    if ($("#phone").val() == "") {
        errores += "<p>Escreva sue telefone</p>";
        $("#phone").css("border-left-color", "#f9ca24");
      } else {
        $("#phone").css("border-left-color", "#222");
      };

    // Validado Correo ==============================
    if ($("#email").val() == "") {
      errores += "<p>Digite sue E-mail</p>";
      $("#email").css("border-left-color", "#f9ca24");
    } else {
      $("#email").css("border-left-color", "#222");
    };

    // Validado Mensaje ==============================
    if ($("#mensaje").val() == "") {
      errores += "<p>Escreve sue mensagem</p>";
      $("#mensaje").css("border-left-color", "#f9ca24");
    } else {
      $("#mensaje").css("border-left-color", "#222");
    };

    // ENVIANDO MENSAJE ============================
    if ((errores == "") == false) {
      var mensajeModal =
        '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        "<h3>Erros Encontrados</h3>" +
        errores +
        '<span id="btnClose">Cerrar</span>' +
        "</div>" +
        "</div>";

      $("body").append(mensajeModal);
    };
   

    // CERRANDO MODAL ==============================
    $("#btnClose").click(function () {
      $(".modal_wrap").remove();
    });

    
    
  });
  
});



form.addEventListener("submit", handleSubmit);


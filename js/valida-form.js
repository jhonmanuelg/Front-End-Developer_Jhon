$(document).ready(function () {
  $("#btnSend").click(function () {
    var errores = "";

    // Validado Nombre ==============================
    if ($("#names").val() == "") {
      errores += "<p>Escreva seu nome</p>";
      $("#names").css("border-bottom-color", "#f9ca24");
    } else {
      $("#names").css("border-bottom-color", "#222");
    }

    // validar assunto =============================
    if ($("#assunto").val() == "") {
      errores += "<p>Escreva seu assunto</p>";
      $("#assunto").css("border-bottom-color", "#f9ca24");
    } else {
      $("#assunto").css("border-bottom-color", "#222");
    }

    // validar assunto =============================
    if ($("#phone").val() == "") {
        errores += "<p>Escreva sue Celular</p>";
        $("#phone").css("border-bottom-color", "#f9ca24");
      } else {
        $("#phone").css("border-bottom-color", "#222");
      }

    // Validado Correo ==============================
    if ($("#email").val() == "") {
      errores += "<p>Digite sue E-mail</p>";
      $("#email").css("border-bottom-color", "#f9ca24");
    } else {
      $("#email").css("border-bottom-color", "#222");
    }

    // Validado Mensaje ==============================
    if ($("#mensaje").val() == "") {
      errores += "<p>Escreve sue mensagem</p>";
      $("#mensaje").css("border-bottom-color", "#f9ca24");
    } else {
      $("#mensaje").css("border-bottom-color", "#222");
    }

    // ENVIANDO MENSAJE ============================
    if ((errores == "") == false) {
      var mensajeModal =
        '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        "<h3>Erros encontrados</h3>" +
        errores +
        '<span id="btnClose">Cerrar</span>' +
        "</div>" +
        "</div>";

      $("body").append(mensajeModal);
    }

    // CERRANDO MODAL ==============================
    $("#btnClose").click(function () {
      $(".modal_wrap").remove();
    });
  });
});



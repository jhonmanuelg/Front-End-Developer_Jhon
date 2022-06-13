$(document).ready(function () {
  $("#btnSend").click(function () {
    var errores = "";

    // Validado Nombre ==============================
    if ($("#names").val() == "") {
      errores += "<p>span Escreva seu nome</p>";
      $("#names").css("border-bottom-color", "#F14B4B");
    } else {
      $("#names").css("border-bottom-color", "#d1d1d1");
    }

    // validar assunto =============================
    if ($("#assunto").val() == "") {
      errores += "<p>Escreva seu assunto</p>";
      $("#assunto").css("border-bottom-color", "#F14B4B");
    } else {
      $("#assunto").css("border-bottom-color", "#d1d1d1");
    }

    // validar assunto =============================
    if ($("#phone").val() == "") {
        errores += "<p>span Escreva sue Celular</p>";
        $("#phone").css("border-bottom-color", "#F14B4B");
      } else {
        $("#phone").css("border-bottom-color", "#d1d1d1");
      }

    // Validado Correo ==============================
    if ($("#email").val() == "") {
      errores += "<p>Digite sue E-mail</p>";
      $("#email").css("border-bottom-color", "#F14B4B");
    } else {
      $("#email").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Mensaje ==============================
    if ($("#mensaje").val() == "") {
      errores += "<p>Escreve sue mensagem</p>";
      $("#mensaje").css("border-bottom-color", "#F14B4B");
    } else {
      $("#mensaje").css("border-bottom-color", "#d1d1d1");
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



$(document).ready(function () {
  $("#btnSend").click(function () {
    var errores = "";

    // Validado Nombre ==============================
    if ($("#names").val() == "") {
      errores += "<p>Escreva seu nome</p>";
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
        errores += "<p>Escreva sue Celular</p>";
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

// function validation(){

//     var nome = document.getElementById("name").value;
//     var assunto = document.getElementById("assunto").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     var error_message = document.getElementById("error_message");
//     var text;

//     error_message.style.padding = "10px";

//     if(nome.length < 5){
//         text = "O nome é inválido";
//         error_message.innerHTML = text;
//         return false;
//     }

//     if(assunto.length < 10){
//         text = "O Assunto é inválido";
//         error_message.innerHTML = text;
//         return false;
//     }
//     if(isNaN(phone) || phone.length != 9){
//         text = "O número de celular é inválido só (DDD)9xx.xx.xx";
//         error_message.innerHTML = text;
//         return false;
//     }
//     if(email.indexOf("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$") == - 1 || email.length < 20){
//         text = "O número de E-mail é inválido";
//         error_message.innerHTML = text;
//         return false;
//     }
//     if(message.length <= 300){
//         text = "A Mensagem leva apenas 300 corater";
//         error_message.innerHTML = text;
//         return false;
//     }

//     validation();

//  return true;

// }

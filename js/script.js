$(document).ready(function () {

  
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      550,
      "linear"
    );
  });
});

// para ocultar texto 1 presentacion

let btne_ver_mas = document.getElementById("btne_ver_mas");
let btne_ver_menos = document.getElementById("btne_ver_menos");
let span_text = document.getElementById("span_text");

btne_ver_mas.addEventListener("click", act_style);

function act_style() {
  span_text.classList.add("mostrar");
  btne_ver_mas.classList.add("ocultar");
}

btne_ver_menos.addEventListener("click", ocultarTexto);

function ocultarTexto() {
  span_text.classList.remove("mostrar");

  if (span_text.classList.contains("mostrar")) {
    btne_ver_mas.classList.add("mostrar");
  } else {
    btne_ver_mas.classList.remove("ocultar");
  }
}

// función de WhatsApp
const botaoWhatsapp = document.querySelector("#WhatsApp-link");

botaoWhatsapp.addEventListener("click", function () {
  window.open("https://wa.me/11958838782", "_blank");
});

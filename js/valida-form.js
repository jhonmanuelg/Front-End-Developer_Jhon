const email = document.getElementById("email")
const assonto = document.getElementById("assonto")
const fonm = document.getElementById("from")
const nome = document.getElementById("nome")
const alertNome = document.getElementById('alertNome')


nome.addEventListener("click", () => {
  alertNome.style.display = "none";
});
email.addEventListener("click", alertaNome);

function alertaNome() {
  console.log("click");
  if (nome.value === "") {
    alertNome.innerText = "Insira Nome é Sobrenome";
    alertNome.style.display = "";
  }
  if (nome.value.length > 0 && nome.value.length < 6) {
    alertNome.innerText = "O nome e muito corto,Insira Nome é Sobrenome";
    alertNome.style.display = "";
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let entrar = false;

  if (nome.value.length < 6) {
    alert("Insira Nome é Sobrenome");
  }
  if (!regexEmail.test(email.value)) {
    alert("O correio é inválido");
    entrar = true;
  }
  if (!regexassonto.test(assonto.value)) {
    alert("O assonto é obligatorio");
    entrar = true;
  }
  if (!regexmensagem.test(mensagem.value)) {
    alert("O mensagemé obligatorio");
    entrar = true;
  } else {
    alert("Mensagem enviado");
    form.reset();
    return false;
  }
});
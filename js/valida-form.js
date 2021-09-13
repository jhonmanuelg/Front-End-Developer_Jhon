

  const nome=document.getElementById('nome')
  const email=document.getElementById('email')
  const telefone=document.getElementById('assonto')
  const form=document.getElementById('form')
  const alertNome=document.getElementById('alertNome')
 
  document.forms["datos"];
 
 nome.addEventListener('click',()=>{alertNome.style.display="none";});
 email.addEventListener('click',alertaNome);
 
  form.addEventListener("submit", e=>{
    e.preventDefault()
   
    let regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regexTelefone= /^\d{2}-\d{5}-\d{4}$/;
    let entrar= false
 
 
    if (nome.value.length <6){
      alert("Insira Nome é Sobrenome") 
    }
    if (!regexEmail.test(email.value)){
     alert("O correio é inválido")
     entrar= true
    }
    if(!regexTelefone.test(assonto.value)){
     alert("O número é inválido")
     entrar= true
    }else{
   
     alert("Mensagem enviado")
     form.reset();
         return false;
     
   }
  })
 
 function alertaNome(){
   console.log('click')
   if (nome.value === ""){
     alertNome.innerText="Insira Nome é Sobrenome";
     alertNome.style.display=""; 
   }
   if (nome.value.length>0 && nome.value.length<6){
     alertNome.innerText="O nome e muito corto,Insira Nome é Sobrenome";
     alertNome.style.display=""; 
   }
 };
 


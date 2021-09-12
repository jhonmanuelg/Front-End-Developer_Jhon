

 var form = document.getElementById("my-form");
    
 async function handleSubmit(event) {
   event.preventDefault();
   var status = document.getElementById("my-form-status");
   var data = new FormData(event.target);
   fetch(event.target.action, {
     method: form.method,
     body: data,
     headers: {
         'Accept': 'application/json'
     }
   }).then(response => {
     status.innerHTML == ("¡Gracias por tu envío!");
     form.reset()
   }).catch(error => {
     status.innerHTML = "Oops! Hubo un problema al enviar su formulario ";
   });
 }
 form.addEventListener("submit", handleSubmit)


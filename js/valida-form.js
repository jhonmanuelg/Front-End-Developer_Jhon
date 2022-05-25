function validation(){
    
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(nome.length < 4){
        text = "O nome é inválido";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10){
        text = "O Assunto é inválido";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 9){
        text = "O número de celular é inválido só (DDD)9xx.xx.xx";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$") == - 1 || email.length < 20){
        text = "O número de E-mail é inválido";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 300){
        text = "A Mensagem leva apenas 300 corater";
        error_message.innerHTML = text;
        return false;
    }

    alert("Formulário enviado com sucesso")

 return true;

}




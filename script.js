function Enviar(){
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    if(name.length==0||email.length==0){
        alert('[ERRO] ] Verifique os campos')
    }else{
        alert("Enviado, aguarde o retorno.")
    }
}

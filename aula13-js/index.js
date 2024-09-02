
function logar(){
    var login = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value
 
    if(login == "admin" && senha == "admin"){
    location.href = "home.html"
    alert('login realizado com sucesso !')
     
    }
    else{
     alert('Usuário ou senha incorretos')
    }
 }
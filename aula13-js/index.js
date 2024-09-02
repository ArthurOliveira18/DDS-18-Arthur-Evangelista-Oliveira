
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


 function cadastrar(){
    var Usuário = document.getElementById('inputUsuarioNovo').value
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenhaNovo').value
    var senhaConfirma = document.getElementById('inputConfirmeSenha').value

    var emailCerto = emailValido(email)

    if(emailCerto){
        if(senha === senhaConfirma){
            location.href = "index.html"
            alert("Olá " + Usuário + ", seja bem vindo! ")

        } else{
            alert('As senhas não coincidem')
        }
    } else{
        alert("Este email está incorreto")
    }
 }


 function emailValido(email){
    return email.includes('@')
 }
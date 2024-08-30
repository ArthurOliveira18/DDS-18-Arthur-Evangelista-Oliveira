

// Obejto window = janela do navegador
// console.log("Testando pra ver se funciona")
// window.alert("Alertei")
// window.prompt("Diz pra mim oq já sei:")


// Obejeto docment = codigo html
// console.log(document.head)
// console.log(document.body)


let titulo = document.getElementsByTagName("h1") //Se quiser acessar o h1 especifico deve fazer igual array e falar qual elemento
let paragrafos = document.getElementsByClassName("para")
let para3 = document.getElementById("p3")
let p1 = document.getElementsByTagName("p")[0]



console.log(titulo)
console.log(paragrafos)
console.log(para3)

paragrafos[0].innerText = "salada" //Mudando o conteudo do html

para3.innerHTML = "<h3>Substiui o id do p3 </h3>" //mudando o PROPRIO html


p1.style.color = "green"
p1.style.backgroundColor = "Blue"
p1.style.color = "#fff"







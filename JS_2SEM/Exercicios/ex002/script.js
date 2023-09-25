

const botao = document.querySelector("#botao");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");
const contadorElemento = document.querySelector(".contador");

//inicializando contador
let contador = 0;

//Função que será chamada quando o botão for clicado
function aumentarContador()
{
    contador++
    contadorElemento.textContent = contador;
}
function diminuirContador()
{
    if(contador <= 0){
        alert("não da para diminuir mais")
    } else{
        contador--;
    }
    
    contadorElemento.textContent = contador;

   
}
function zerarContador(){
    contador = 0
    contadorElemento.textContent = contador;
}
//Adicionando ouvinte do evento para clique do botão

botao.addEventListener("click", aumentarContador);
botao2.addEventListener("click", diminuirContador);
botao3.addEventListener("click", zerarContador);
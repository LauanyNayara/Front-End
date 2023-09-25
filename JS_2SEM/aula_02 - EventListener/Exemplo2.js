const visor = document.querySelector("#visor");

//Adicionando um ouvinte ao evento para Keyudown no documento.

document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
        visor.textContent = "Tecla A precionada";
    }
    else if (event.key === "d" || event.key === "D"){
        visor.textContent = "Tecla D precionada";
    }
    
})
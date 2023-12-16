let spaceshipNome = prompt("Digite o nome da nave:")

let spaceshipVelocidade = 0 

let chosenOption 

function ShowMenu() {
    let option 
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer? \n" 
        + "1- Acelerar a nave em 5km/s \n" + "2- Desacelerar a nave em 5km/s \n" 
        + "3- Imprimir dados de bordo \n" + "4-Sair do programa" )
        
    }
    return option
}
function Acelerar(velocidade){
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}
function Desacelerar(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}
function printspaceshipDATA (nome, velocidade) {
    alert("Espaçonave: " + nome + "\n Velocidade:" + velocidade + "km/s")
}
do {
    chosenOption = ShowMenu()  
    switch(chosenOption){
        case "1":
            spaceshipVelocidade = Acelerar(spaceshipVelocidade)
            break
        case "2":
            spaceshipVelocidade = Desacelerar(spaceshipVelocidade)
            break
        case "3":
            printspaceshipDATA(spaceshipNome, spaceshipVelocidade)
            break
        default:
            alert("Encerrando o programa de bordo!")    
    }
} while(chosenOption != "4")
const result = document.querySelector(".resultado")
const meusPontos=document.querySelector("#humano")
const pontosRobo=document.querySelector("#robo")

let meusPontosNumber = 0
let pontosRoboNumber = 0

const escolhas = (humano) => {
    playTheGame(humano, escolhaRobo())
}

const escolhaRobo = (robo) => {
    const escolhaRobo = ['pedra', 'papel', 'tesoura']
    const numeroAleatorio = Math.floor(Math.random() * 3)

    return escolhaRobo[numeroAleatorio]

}
const playTheGame = (humano, robo) => {
    console.log('humano: ' + humano + 'maquina: ' + robo)
    if (humano === robo) {
        result.innerHTML = "Deu empate"

    } else if (humano === 'papel' && robo === 'pedra' || humano === 'pedra' && robo === 'tesoura' || humano === 'tesoura' && robo === 'papel') {
        meusPontosNumber++
        meusPontos.innerHTML=meusPontosNumber
        result.innerHTML = " Vc ganhou &#x1F602;"

    }
    else {
        pontosRoboNumber++
        pontosRobo.innerHTML=pontosRoboNumber
        result.innerHTML = " Vc perdeu &#x1F62D;"
    }

}
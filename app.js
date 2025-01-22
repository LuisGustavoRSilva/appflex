/**
 * App - Flex
 * @Autor Luis Gustavo Rodrigues Da Silva
 */

// declaração de variaveis
let etanol, gasolina

function calcular() {
    // Entrada de dados
    etanol = frnFlex.inputEtanol.value
    gasolina = frnFlex.inputGasolina.value
    // console.log(etanol)
    // console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="img/etanol.png"
    } else {
        document.getElementById("status").src="img/gasolina.png"
    }
    return false
}
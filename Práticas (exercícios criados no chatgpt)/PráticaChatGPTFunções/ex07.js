function maiorNumero(numeros) {
    let maior = 0
    for(c = 0; c < numeros.length; c++) {
        if (numeros[c] > maior) {
            maior = numeros [c]
        }
    }
    console.log(`O maior número de todos é ${maior}`)
}

let numeros = [0,2,5,6,4,9,12,18,20,4,7]

maiorNumero(numeros)
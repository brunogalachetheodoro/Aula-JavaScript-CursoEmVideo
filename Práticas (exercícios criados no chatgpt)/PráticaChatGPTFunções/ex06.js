function calculaMedia (notas) {
    let soma = 0
    let media = 0
    let c
    for (c=0; c <notas.length; c++) {
        soma = soma + notas[c]
    }
    media = soma / c
    console.log(`A media de todos os números é igual a ${media}`)
}

let notas = [10,9,7,10,9,8,10]

calculaMedia(notas)
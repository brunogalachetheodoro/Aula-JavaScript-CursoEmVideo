let num = [5,2,3,4,7,9]

let soma = 0
let cont = 0
let media = 0
while (cont < num.length) {
    soma = soma + num [cont]

    cont++
}

media = soma / num.length

console.log(`A média de todos os números é igual a ${media}`)
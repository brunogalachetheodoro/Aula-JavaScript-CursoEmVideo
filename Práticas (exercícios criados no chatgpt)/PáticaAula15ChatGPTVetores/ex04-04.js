let notas = [10,7,9,6,5,3,10,9]
let media = 0
let soma = 0

for (let cont = 0; cont < notas.length; cont++){
    soma = soma + notas[cont]
    
} 

media = soma  / notas.length

console.log(`A média de todas as notas é igual a ${media.toFixed(1)}`)
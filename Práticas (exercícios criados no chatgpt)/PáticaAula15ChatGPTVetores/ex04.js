let num = [3,4,2,1,8,9,7]
let maior = 0
for (let cont = 0 ; cont < num.length; cont++ ) {
    if (maior < num[cont]) {
        maior = num[cont]  
    }
}
console.log (`O maior elemento dentro do array é ${maior}`)
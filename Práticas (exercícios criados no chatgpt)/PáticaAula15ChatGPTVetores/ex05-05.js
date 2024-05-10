let num = [3,5,4,2,7,3,9,8,4,12,26,23]

let impar = []

for (let cont = 0; cont < num.length; cont++) {
    if (num[cont] % 2 == 1) {
        impar.push(num[cont])
    }
}

console.log(`Os números impares são ${impar}!`)

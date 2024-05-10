let num = [0,1,6,8,7,12,43,5,6,92,75,84,22,25,68]
let pares = []

console.log('Os números pares são: ')
for (let cont = 0; cont < num.length; cont++) {
    if (num[cont] % 2 == 0 ) {
        pares.push (num[cont])

    }
}
console.log(pares)
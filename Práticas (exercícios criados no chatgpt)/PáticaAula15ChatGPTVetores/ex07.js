let num = [3,4,3,2,1,3,8,9,7]
let cont2 = 0

for (let cont = 0; cont < num.length; cont++) {

    if (num[cont] == 3) {
        cont2++
    }
}

console.log(`O número 3 apareceu ${cont2} vezes no array`)
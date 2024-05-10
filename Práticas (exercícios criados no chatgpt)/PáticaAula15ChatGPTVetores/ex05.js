let num = [3,4,2,1,8,9,7]

let menor = num[0]

for (let cont = 0; cont < num.length; cont++) {
    if (num[cont]< menor){
        menor = num[cont]
    }
}
console.log(`O menor elemento dentro do array é ${menor}`)
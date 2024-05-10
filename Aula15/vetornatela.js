let valores = [8,10,12,5,7,9,12,16,22]

valores.sort()
/* for (let pos =0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
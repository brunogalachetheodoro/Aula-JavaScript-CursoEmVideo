function calcularMedia (media) {
    let soma = 0
    for (let i =0; i < media.length; i++) {
        soma += media[i]
    }
    return soma/ media.length;
}

let media = [10,9,7,8,5]

console.log(calcularMedia(media))


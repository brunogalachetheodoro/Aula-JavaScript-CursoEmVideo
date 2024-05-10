function contar() {

let inicio = document.getElementById('inicio')
let fim= document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] FALTAM DADOS!')
} else {
    res.innerHTML= 'Contando: <br>'
    let inicioInserido = Number(inicio.value)
    let fimInserido = Number (fim.value)
    let passoInserido = Number (passo.value)

    if(passoInserido <=0) {
        window.alert('Passo Inválido! Considerando PASSO 1')
        passoInserido = 1
    }

    if (inicioInserido < fimInserido) {
        for (let c = inicioInserido; c <= fimInserido; c += passoInserido) {
            res.innerHTML += `${c} \u{1F449}`
        } 

        }   else {
            for (let c = inicioInserido; c >= fimInserido; c -= passoInserido) {
                res.innerHTML+= `${c} \u{1F449}`
                }
        }
    res.innerHTML += `\u{1F3C1}`
    }





}
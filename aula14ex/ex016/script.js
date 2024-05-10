function contar() {

let inicio = document.getElementById('inicio')
let fim= document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

let inicioInserido = Number(inicio.value)
let fimInserido = Number(fim.value)
let passoInserido = Number(passo.value)

let c = 0
let soma = 0


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
    window.alert('[ERRO] Por Favor, Insira Os Dados Faltantes')
}   else {
    res.innerHTML += 'Contando: <br>'
if (inicioInserido < fimInserido) {}
    while (c <= fimInserido) {
    soma = inicioInserido + c
    if (soma <= fimInserido) {
        res.innerHTML += `\u{1F449} ${soma}`   
    } 
    c = c + passoInserido 
    
}   
    if (soma >= fimInserido){
        res.innerHTML += `\u{1F449} \u{1F6A9}`  
    }}
    //res.innerHTML += `\u{1F449} `    
    //res.innerHTML += `\u{1F6A9}`*/ //=> meu código



    

}

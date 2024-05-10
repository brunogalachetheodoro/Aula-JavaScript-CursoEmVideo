function gerar () {
    let num = document.getElementById('numero')
    let res = document.getElementById('seltab')

   let numInserido = Number(num.value)
    let c = 1
    let mult = 0


    for (c; c <= 10; c++) {
        mult = numInserido * c
        res.innerHTML += `<br> ${numInserido} x ${c} = ${mult}<br>` 
    }



}
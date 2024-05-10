function gerar () {
    let num = document.getElementById('numero')
    let res = document.getElementById('seltab')

  /*  let numInserido = Number(num.value)
    let c = 1
    let mult = 0


    for (c; c <= 10; c++) {
        mult = numInserido * c
        res.innerHTML += `<br> ${numInserido} x ${c} = ${mult}<br>` 
    } = meu código*/

    if (num.value.length == 0){
        window.alert ('Por favor, digite um número!')

    } else {
        let numInserido = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('opition')
            item.text = `${numInserido} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }

}
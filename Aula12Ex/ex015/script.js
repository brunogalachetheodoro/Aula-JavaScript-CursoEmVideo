function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                    //Criança
                    img.setAttribute('src','menino.png')
            } else if ( idade < 18) {
                    //Jovem
                    img.setAttribute('src', 'jovem-menino.png')
            } else if ( idade < 60) {
                    //Adulto
                    img.setAttribute('src', 'homem.png')    
            }else {
                    //Idoso
                    img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade <18) {
                //Jovem
                img.setAttribute('src', 'jovem-menina.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
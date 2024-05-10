function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora= data.getHours() 
    let hora = 16
    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 0 && hora < 12) {
        img.src= 'manhã.png'
        document.body.style.background ='#7C5C3B'
    } else if (hora >= 12 &&hora <18) {
        img.src= 'tarde.png'
        document.body.style.background = '#DC630C'
    } else {
        img.src= 'noite.png'
        document.body.style.background= '#141F27'
    }
}
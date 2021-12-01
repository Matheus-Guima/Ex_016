function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} horas!`
    if(hora >= 0 && hora < 12){
        //BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background ='#d5c3ad'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background ='#fae210'
    }else{
        //BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background ='#3475af'
    }

}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/bhomem.jpg')


            }else if(idade < 21){
                img.setAttribute('src','imagens/jhomem.jpg')
                


            }
            else if(idade < 50){
                img.setAttribute('src','imagens/ahomem.jpg')
        }
        else{
            img.setAttribute('src','imagens/ihomem.jpg')
        } 

       
        } 
        
        res.style.textAling =  'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
        img.setAttribute("object-fit: cover;")
    }
}
//inicio do codigo
function calcular(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    //aviso
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML ='Imposivel contar!'
        window.alert('[Erro] Faltam dados!')
        
    }else{
        res.innerHTML = 'Contando: <br>'
        // transformando os numero
        var i = Number(inicio.value)     
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            //aviso q passo tem que ser 1
            window.alert('passo invalido')
            p = 1
        }
        if(i < f){
            // contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
        }
       }else{
        // contagem regresiva
            for(var c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1f449}`
            }

        }
       res.innerHTML += `\u{1f3c1}`
    

    }
  
}

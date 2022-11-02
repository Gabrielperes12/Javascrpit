//inicio do codigo
function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    //convertendo texto para numero

if(num.value.length == 0){
        window.alert('Digite um número')
 } 
 else {
    //criando tabuada
    var n = Number(num.value)
    var c = 1
while(c <= 10) {
    var item = document.createElement('option')
    item.text = `${num} x ${c} = ${num*c}`
    tab.appendChild(item)
    c++
    

}
    
    

}

}
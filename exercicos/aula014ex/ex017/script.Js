//inicio do codigo
function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

//convertendo texto para numero
if(num.value.length == 0){
    window.alert('Digite um Número')
} 
//criando tabuada
else{
    var n = Number(num.value);
    var c = 1
    tab.innerHTML =''
while(c <= 10){
   var option = document.createElement('option')
   option.text = `${c} X ${n} = ${c*n}`
   tab.appendChild(option)
   c++
}
}
}
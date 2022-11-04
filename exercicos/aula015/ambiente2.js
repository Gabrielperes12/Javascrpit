/* exemplo 1
var valores = [8, 1, 7, 4, 2, 9]
for( var pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/
var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(var pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} 
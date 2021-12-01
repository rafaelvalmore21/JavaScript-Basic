/*
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo 
trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", 
de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/
const numberDinamyc = Math.floor((Math.random() * 10 ) + 1);
console.log('Número dinámico: ' + numberDinamyc);
const numberProposal = prompt('Ingrese un número entre 1 y 10: ')
if (numberProposal < 1 || numberProposal > 10) {
    console.log('Número ingresado no valido')
}else if (numberProposal == numberDinamyc) {
    console.log('Felicitaciones, ese era! ' + numberProposal)
}else{
    console.log('Lo siento, era el '+ numberDinamyc +', intenta nuevamente!')
}

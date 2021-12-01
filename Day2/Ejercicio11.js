/*
Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
*/
const numberProposal = prompt('Ingrese un número y valide si es múltipo de 3 y 5: ')

if (numberProposal % 3 == 0 && numberProposal % 5 == 0) {
    console.log('bingbong')
} else if (numberProposal % 5 == 0) {
    console.log('bong')
} else if (numberProposal % 3 == 0)  {
    console.log('bing')
}else{
    console.log('No cumple: ' + numberProposal)
}
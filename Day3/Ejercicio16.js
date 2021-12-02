/*
Escribe un programa para la consola que le pida al usuario dos números e 
imprima en la consola los números en ese rango. 
Por ejemplo, si el usuario ingresa 5 como primer número y 10 como 
segundo número, el programa debe imprimir: 
5
6
7
8
9
10
Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.
*/

const number1 = parseInt(prompt('Ingrese un primer número: '))
const number2 = parseInt(prompt('Ingrese un segundo número: '))

if (number1 < number2) {
    for (let index = number1; index <= number2; index++) {
        console.log(index)
    }
}else if (number2 < number1) {
    for (let index = number2; index <= number1; index++) {
        console.log(index)
    }
}else{
    console.log('Unknown value')
}

console.log('******')

const number3 = parseInt(prompt('Ingrese un primer número: '))
const number4 = parseInt(prompt('Ingrese un segundo número: '))

if (number3 < number4) {
  let index = number3
    while (index < number4) {
        console.log(index)
        index = index + 1
    }   
}else if (number4 < number3) {
  let index = number4
    while (index < number3) {
        console.log(index)
        index = index + 1
    }
}else{
    console.log('Unknown value')
}
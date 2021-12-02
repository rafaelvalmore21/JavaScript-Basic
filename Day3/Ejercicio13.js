/*
Escribe un programa que le pida al usuario una frase y un número. 
El programa debe imprimir la frase en la consola el número de veces 
que ingresó el usuario.
Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 
5, el programa debe imprimir "Hola Mundo" 5 veces:
*/

const phrase = prompt('Ingrese una frase: ')
let number = prompt('Ingrese un número')

for (let index = 1; index <= number; index++) {
    console.log(phrase + ' ' + index)   
}

console.log('*********')

let index = 1

while (index <= number) {
    console.log(phrase + ' ' + index)
    index++
}
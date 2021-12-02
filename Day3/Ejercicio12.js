/*
Escribe un programa que le pida al usuario ingresar una frase. 
El programa debe imprimir la frase en la consola 10 veces.
Nota: utiliza un ciclo para imprimir la frase las 10 veces.
*/

const phrase = prompt('Ingrese una frase: ')

for (let index = 1; index <= 10; index++) {
    console.log(phrase + ' ' + index)   
}
console.log('*********')

let index = 1
while (index <= 10 ) {
        console.log(phrase + ' ' + index)
    index++
}
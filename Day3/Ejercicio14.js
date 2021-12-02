/*
Escribe un programa para la consola que le pida al usuario un número e 
imprima los números desde 1 hasta el número.
Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:
*/

const number = prompt('Ingrese un número: ')

for (let index = 1; index <= number; index++){
    console.log(index) 
}

console.log('******')

let index = 1

while(index <= number){
    console.log(index)
    index++
}
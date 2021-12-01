# JavaScript-Basic

## Día 1

## Día 2
### Ejercicio 6

Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
```
const num1 = prompt('Digite un npumero: ')
console.log(num1)
if(num1 >10){
    console.log( "El número es mayor a 10")
}else{
    console.log("El número es menor o igual a 10")
}
```

### Ejercicio 7
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo 
trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", 
de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
```
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
```

### Ejercicio 8 
Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). 
Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir
"No, el número x no es múltiplo de 5".
```
const numberProposal = prompt('Ingrese un número para validar si es multiplo de 5: ')

if (numberProposal % 5 == 0) {
   console.log('Si, el número '+ numberProposal +' es múltiplo 5') 
}else{
    console.log('No, el número '+ numberProposal +' no es múltiplo de 5')
}
```

## Día 3

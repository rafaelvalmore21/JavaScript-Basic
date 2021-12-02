# JavaScript-Basic

<details><summary>Día 1</summary>

### Ejercicio 1

### Ejercicio 2

### Ejercicio 3

### Ejercicio 4

### Ejercicio 5

</details>

<details><summary>Día 2</summary>

**<details><summary>Lógica booleana y Condicionales</summary>**

* Opeadores
    - if - else
        ```
        const num = 8;
        if (num < 10) {
            console.log("El número es menor a 10");
        } else {
        if (num > 10) {
            console.log("El número es mayor a 10");  
        } else {
            console.log("El número es igual a 10");
        }
        }
        ```
        - Switch - case
        ```
        ```
        - Ternario
            ```
            <condición> ? <expr1> : <expr2>
            ```
            ```
            const num = 10;
            num >= 15 ? console.log('Es mayor o igual que 15') : console.log('Es menor que 15');
            ```
</details>
<br>

### Ejercicio 6

Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
```
const num1 = prompt('Digite un número: ')
console.log(num1)

if(num1 > 10){
    console.log( "El número es mayor a 10")
}else if (num1 <= 10) {
    console.log("El número es menor o igual a 10")
}else{
    console.log("Unknown value")
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

### Ejercicio 9

Escribe un programa que le pida un número al usuario e imprima en la consola si el 
número si es mayor, menor o igual que 10.
Si el número es menor a 10 debe imprimir "El número es menor que 10".
Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
Si el número es igual a 10 debe imprimir "El número es igual a 10".

```
const numberProposal = prompt('Ingrese un número: ')

if (numberProposal < 10) {
    console.log('El número es menor que 10')
} else if (numberProposal > 10) {
    console.log('El número es mayor que 10')
}else if(numberProposal == 10){
    console.log('El número es igual a 10')
}else{
    console.log('Unknown value')
}
```

### Ejercicio 10

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina 
la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30

```
const weight = prompt('Ingrese el peso: ')
const height = prompt('Ingrese la altura: ')

const bim = parseFloat(weight/Math.pow(height,2)).toFixed(2)

if (bim < 18.5) {
    console.log('Bajo de peso: '+ bim)    
} else if (bim >= 18.5 && bim <= 24.9) {
    console.log('Normal: '+ bim) 
} else if (bim >= 25 && bim <= 29.9) {
    console.log('Sobrepeso: '+ bim) 
} else if (bim >= 30) {
    console.log('Obeso: '+ bim) 
} else{
    console.log('Unknown value: '+ bim)  
}
```

### Ejercicio 11

Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

```
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
```
</details>

<details><summary>Día 3</summary>

**<details><summary>Bucles</summary>**
* for 
* for ... of
* while
    ```
    const names = [Pia', 'German', 'Rafael']

    let index = 0;
    while (index < names.length){
        const name = names[index];
        console.log(name);
        index++;
    }
    ```

</details>

</details>

<details><summary>Día 4</summary>

</details>

<details><summary>Día 5</summary>

</details>

<details><summary>Día 6</summary>

</details>

<details><summary>Día 7</summary>

</details>

<details><summary>Día 8</summary>

</details>

<details><summary>Día 9</summary>

</details>

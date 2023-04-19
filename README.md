# Cifrado y Descifrado César

Este proyecto contiene dos funciones en JavaScript que permiten cifrar y descifrar texto utilizando el cifrado César.

## Descripción

El cifrado César es un método de cifrado por sustitución en el que cada letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. En este proyecto, el desplazamiento utilizado es de 4 posiciones.

La función `cifradoCesar(texto)` recibe como parámetro el texto que se desea cifrar y devuelve el texto cifrado utilizando el cifrado César.

La función `descifradoCesar(texto)` recibe como parámetro el texto que se desea descifrar y devuelve el texto descifrado utilizando el cifrado César.

## Ejemplo de uso

```javascript
const textoOriginal = "Este es un texto de ejemplo.";
const textoCifrado = cifradoCesar(textoOriginal);
console.log(textoCifrado); // "Iwxi~iw|yr~xibxs~hi|iniqtps."

const textoDescifrado = descifradoCesar(textoCifrado);
console.log(textoDescifrado); // "Este es un texto de ejemplo."
```

## Créditos

Este proyecto fue creado por Amado León y forma parte del curso Challenge-Oracle-ONE-I de Oracle One.

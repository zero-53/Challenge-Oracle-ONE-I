
function cifradoCesar(texto) {
    var resultado = "";
    var desplazamiento = 4;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charCodeAt(i);
        if (caracter >= 65 && caracter <= 90) {
            // Mayúsculas
            resultado += String.fromCharCode(((caracter - 65 + desplazamiento) % 26) + 65);
        } else if (caracter >= 97 && caracter <= 122) {
            // Minúsculas
            resultado += String.fromCharCode(((caracter - 97 + desplazamiento) % 26) + 97);
        } else {
            if(texto.charAt(i) == ' '){
                if( i % 2 == 0){
                    resultado += '~'
                }else{
                    resultado += '|'
                }
            }else{
                resultado += texto.charAt(i);

            }
            console.log(texto.charAt(i));
        }
    }
    return resultado;
}

function descifradoCesar(texto) {
    var resultado = "";
    var desplazamiento = 4;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charCodeAt(i);
        if (caracter >= 65 && caracter <= 90) {
            // Mayúsculas
            resultado += String.fromCharCode(((caracter - 65 - desplazamiento) % 26) + 65);
        } else if (caracter >= 97 && caracter <= 122) {
            // Minúsculas
            resultado += String.fromCharCode(((caracter - 97 - desplazamiento) % 26) + 97);
        } else {
            if(texto.charAt(i) == '~' || texto.charAt(i) == '|'){
                resultado += ' '
            }else{
                resultado += texto.charAt(i);

            }
        }
    }
    return resultado;
}

var texto = 'Danna Isabella León Romero';
var Encriptado = cifradoCesar(texto);


console.group('Encriptado')
console.log(Encriptado);
console.groupEnd();
console.group('Encriptado')
console.log(descifradoCesar(Encriptado));
console.groupEnd();
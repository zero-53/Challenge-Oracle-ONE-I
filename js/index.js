const alerta = new AlertToats;
/**
 * Esta función realiza un cifrado de cifrado César en un texto dado con un desplazamiento fijo de 4,
 * mientras que también reemplaza los espacios con una tilde o una barra vertical dependiendo de su
 * posición en el texto.
 * @param texto - El texto de entrada que debe cifrarse mediante el algoritmo de cifrado César.
 * @returns una cadena que se ha cifrado con el algoritmo de cifrado César, con algunas reglas
 * adicionales para el manejo de espacios.
 */
function cifradoCesar(texto) {
    try {
        if (!texto) throw `<i class="bi bi-exclamation-triangle-fill fs-2"></i><br><b>Error:</b> Texto de Ingreso no puede estar en blanco`;
        let resultado = "";
        let desplazamiento = 4;
        for (let i = 0; i < texto.length; i++) {
            let caracter = texto.charCodeAt(i);
            if ((caracter >= 65 && caracter <= 90) || (caracter >= 97 && caracter <= 122)) {
                const min = (caracter >= 97 && caracter <= 122) ? 97 : 65;
                resultado += String.fromCharCode((caracter - min + desplazamiento) % 26 + min);
            } else {
                if (texto.charAt(i) == ' ') {
                    if (i % 2 == 0) {
                        resultado += '~'
                    } else {
                        resultado += '|'
                    }
                } else {
                    resultado += texto.charAt(i);

                }
            }
        }
        return resultado;
    } catch (error) {
        alerta.error(error);
        return false;
    }
}

/**
 * Esta es una función de JavaScript que realiza un descifrado de cifrado César en un texto determinado
 * con un desplazamiento fijo de 4.
 * @param texto - El texto de entrada que debe descifrarse mediante el algoritmo de cifrado César.
 * @returns el texto descifrado utilizando el cifrado César con un desplazamiento fijo de 4. Si hay un
 * error, mostrará un mensaje de error y devolverá falso.
 */
function descifradoCesar(texto) {
    try {
        if (!texto) throw (`<i class="bi bi-exclamation-triangle-fill fs-2"></i><br><b>Error:</b> Texto de Ingreso no puede estar en blanco`);
        let resultado = "";
        let desplazamiento = 4;
        for (let i = 0; i < texto.length; i++) {
            let caracter = texto.charCodeAt(i);
            if ((caracter >= 65 && caracter <= 90) || (caracter >= 97 && caracter <= 122)) {
                const min = (caracter >= 97 && caracter <= 122) ? 97 : 65;
                resultado += String.fromCharCode((caracter - min - desplazamiento + 26) % 26 + min);
            } else {
                if (texto.charAt(i) == '~' || texto.charAt(i) == '|') {
                    resultado += ' '
                } else {
                    resultado += texto.charAt(i);

                }
            }
        }
        return resultado;
    } catch (error) {
        alerta.error(error)
        return false;
    }
}

/**
 * Esta función copia el texto de un elemento HTML con el ID "resultado" en el portapapeles del usuario
 * mediante la API navigator.clipboard.
 */
function copy() {
    try {
        let text = document.getElementById('result').value;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                limpiar();
                alerta.ok('<i class="bi bi-check-circle-fill fs-2"></i><br>Texto Copiado!');
            })
        }
    } catch (error) {
        alerta.error(error)
    }
}

/**
 * La función "procesar" procesa la entrada de texto utilizando un cifrado o descifrado de cifrado
 * César, según el valor del parámetro "hab".
 * @param [hab=true] - El parámetro "hab" es un valor booleano que determina si se realiza el cifrado o
 * el descifrado. Si "hab" es verdadero, la función realizará el cifrado utilizando el algoritmo de
 * cifrado César. Si "hab" es falso, la función realizará el descifrado utilizando el mismo algoritmo.
 */
function procesar(hab = true) {
    let resp;
    const text = document.getElementById('ingreso');
    if (hab) {
        resp = cifradoCesar(text.value)

    } else {
        resp = descifradoCesar(text.value)
    }
    if (resp) {
        document.getElementById('result').value = resp
        alerta.ok('<i class="bi bi-check-circle-fill fs-2"></i><br>Texto Procesado!');
    }
}

/**
 * La función "limpiar" borra los valores de dos elementos HTML y muestra un mensaje de alerta.
 */
function limpiar() {
    document.getElementById('ingreso').value = null
    document.getElementById('result').value = null
    alerta.alert(`<i class="material-symbols-rounded fs-2">mop</i><br>Campos Limpio!`)
}

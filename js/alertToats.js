class AlertToats {
    #DIVALERT;
    #TEXTALERT;
    #TIMEOUTID;

    constructor() {
        this.#DIVALERT = document.createElement('div');
        this.#DIVALERT.setAttribute('id', 'snackbar');
        this.#DIVALERT.addEventListener('click', () => {
            this.#hide(this.#DIVALERT);
        });
    }

    // Crear Objeto
    /**
     * Esta función crea una alerta de texto y la agrega al cuerpo del documento.
     * @param text - El texto que se mostrará en el mensaje de alerta.
     */
    #create(text) {
        this.#TEXTALERT = document.createElement('div');
        this.#TEXTALERT.innerHTML = text.toString();
        this.#DIVALERT.innerHTML = '';
        this.#DIVALERT.appendChild(this.#TEXTALERT);
        document.body.insertBefore(this.#DIVALERT, document.body.lastChild);
        this.#removeAlertClasses();
        text = null;
    }

    // Alertas
    /**
     * La función "ok" crea una alerta con un fondo verde y muestra el texto dado.
     * @param text - El parámetro de texto es una cadena que representa el mensaje o contenido que se
     * mostrará en la alerta.
     */
    ok(text) {
        this.#create(text);
        this.#DIVALERT.classList.add('ok');
        this.#call();
    }

    /**
     * Esta es una función de JavaScript que crea un mensaje de error con un texto específico y le
     * agrega una clase CSS.
     * @param text - El mensaje de error que se mostrará en la alerta.
     */
    error(text) {
        this.#create(text);
        this.#DIVALERT.classList.add('error');
        this.#call();
    }

    /**
     * La función crea y muestra una alerta con el texto dado.
     * @param text - El mensaje de texto que se mostrará en la alerta.
     */
    alert(text) {
        this.#create(text);
        this.#DIVALERT.classList.add('alert');
        this.#call();
    }

    // Operativas
    /**
     * La función muestra una alerta div y establece un tiempo de espera para ocultarla después de 4
     * segundos.
     */
    #call() {
        this.#removeTimeout();
        this.#DIVALERT.classList.add('show');
        this.#TIMEOUTID = setTimeout(this.#hide.bind(this), 4000, this.#DIVALERT);
    }

    /**
     * La función oculta y elimina un elemento con una clase específica.
     * @param data - Es probable que el parámetro "datos" se refiera a un elemento DOM que tiene una
     * clase de "mostrar" y debe ocultarse y eliminarse de la página. La función está diseñada para
     * tomar este elemento como un argumento y quitarle la clase "mostrar", ocultándolo efectivamente
     * de la vista. entonces
     */
    #hide(data) {
        data.classList.remove('show');
        data.remove();
    }

    /**
     * La función elimina las clases 'ok', 'error' y 'alerta' de la lista de clases de un elemento.
     */
    #removeAlertClasses() {
        this.#DIVALERT.classList.remove('ok', 'error', 'alert');
    }

    /**
     * La función elimina un tiempo de espera si existe.
     */
    #removeTimeout() {
        if (this.#TIMEOUTID) {
            clearTimeout(this.#TIMEOUTID);
            this.#TIMEOUTID = null;
        }
    }
}
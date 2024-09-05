document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnGenerarContraseña").addEventListener("click", generarContraseña);
    document.getElementById("btnCopiar").addEventListener("click", copiarContraseña)

    const mostrarContraseña = document.getElementById("mostrarContraseñas")

    function generarContraseña () {
        const longitudDeContraseña = parseInt(document.getElementById("longitudDeContraseña").value);
    
        if(longitudDeContraseña < 8) {
            alert("Por favor, ingrese una longitud de contraseña válida (entre 8 y 128 caracteres).");
            return;
        }
        let contraseña = "";

        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
        let contraseñaDisponible =  letrasMinusculas; 

             //numeros 
             const numeros = "0123456789"
             // letras Mayusculas 
             const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
             //simbolos 
             const simbolos = "!#$%&/()=?¡-+*}{[]"
             
             //verificar si el checkbox incluir numeros esta seleccionado
             const incluirNumeros = document.getElementById("incluirNumeros")
             if(incluirNumeros.checked) {
                contraseñaDisponible += numeros
             }
    
            //verificar si el checkbox incluir mayusculas esta seleccionado    
             const incluirMayusculas = document.getElementById("incluirMayusculas")
             if(incluirMayusculas.checked) {
                contraseñaDisponible += letrasMayusculas
             }

             //verificar si el chekbox incluir simbolos esta seleccionado
             const incluirSimbolos = document.getElementById("incluirSimbolos")
             if(incluirSimbolos.checked) {
                contraseñaDisponible += simbolos
             }


        for (let i = 0; i < longitudDeContraseña; i++) {
            const indiceAleatorio = Math.floor(Math.random() * contraseñaDisponible.length)
            contraseña += contraseñaDisponible.charAt(indiceAleatorio)
        }

        mostrarContraseña.textContent = contraseña;

    }

    function copiarContraseña () {

        const contraseña = mostrarContraseña.textContent;
        if (contraseña) {
              //Utiliza la API de portapapeles de JavaScript (navigator.clipboard.writeText) para copiar la contraseña
            navigator.clipboard.writeText(contraseña).then(() => {
            alert("La contraseña ha sido Copiada")
            }).catch(err => {
                console.log("Error al copiar la contraseña: ", err)
            })
        } else {
            alert("No hay ninguna contraseña generada para copiar.")
        }
        }
})
$(document).ready(function () {

    $("#formRegi").submit(function (e) {
        e.preventDefault();
        var nombre = $("#nomUser").val();
        var ape = $("#apeUser").val();
        var nick = $("#nickUserName").val();
        var mail = $("#email")
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();

        let mensajeMostrar = "";
        let entrar = true;


        if (!esMayuscula(nombre.charAt(0))) {
            mensajeMostrar += "La primera letra del nombre debe ser mayuscula<br>";
            entrar = false;
        }

        if (nombre.length > 50) {
            mensajeMostrar += "El nombre puede contener un maximo de 50 caracteres<br>";
            entrar = false;
        }


        if (!ape == "") {

            if (!esMayuscula(ape.charAt(0))) {
                mensajeMostrar += "La primera letra del apellido debe ser mayuscula<br>";
                entrar = false;
            }
            if (ape.length > 50) {
                mensajeMostrar += "El apellido puede contener un maximo de 50 caracteres<br>";
                entrar = false;
            }
        }

        var UltimoDigito = nick.charAt(nick.length - 1);
        if (isNaN(UltimoDigito)) {
            mensajeMostrar += "El ultimo digito del nombre de usuario debe ser un numero<br>";
            entrar = false;
        }

        if (nick.length < 4 || nick.length > 60) {
            mensajeMostrar += "El nombre de usuario debe tener entre 4 y 60 caracteres<br>";
            entrar = false;
        }

        if (mail.length > 70) {
            mensajeMostrar += "El correo no puede contener mas de 70 digitos<br>";
            entrar = false;
        }

        if ((pass1.length > 60 || pass1.length < 4) || (pass2.length > 60 || pass2.length < 4)) {
            mensajeMostrar += "La contraseñas no pueden contener mas de 60 o menos de 4 digitos<br>";
            entrar = false;
        }

        if (pass1 != pass2) {
            mensajeMostrar += "Las contraseñas no coinciden<br>";
            entrar = false;
        }



        if (entrar) {
            $("#mensajeReg").html("Registro exitoso");


        }
        else {
            $("#mensajeReg").html(mensajeMostrar);
        }

    });
})

function esMayuscula(letra) {
    return letra == letra.toUpperCase();
};
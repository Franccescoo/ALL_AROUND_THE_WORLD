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
            mensajeMostrar += "La primera letra del nombre debe ser mayúscula";
            entrar = false;
        }

        if (nombre.length > 50) {
            mensajeMostrar += "<br>----------------<br>El nombre puede contener un máximo de 50 caracteres";
            entrar = false;
        }


        if (!ape == "") {

            if (!esMayuscula(ape.charAt(0))) {
                mensajeMostrar += "<br>----------------<br>La primera letra del apellido debe ser mayúscula";
                entrar = false;
            }
            if (ape.length > 50) {
                mensajeMostrar += "<br>----------------<br>El apellido puede contener un máximo de 50 caracteres";
                entrar = false;
            }
        }

        
        if (!tieneNumero(nick)) {
            mensajeMostrar += "<br>----------------<br>Un dígito del nombre de usuario debe ser un número";
            entrar = false;
        }

        if (nick.length < 4 || nick.length > 60) {
            mensajeMostrar += "<br>----------------<br>El nombre de usuario debe tener entre 4 y 60 caracteres";
            entrar = false;
        }

        if (mail.length > 70) {
            mensajeMostrar += "<br>----------------<br>El correo no puede contener mas de 70 dígitos";
            entrar = false;
        }

        if ((pass1.length > 60 || pass1.length < 4) || (pass2.length > 60 || pass2.length < 4)) {
            mensajeMostrar += "<br>----------------<br>La contraseñas deben tener entre 4 y 60 caracteres";
            entrar = false; 
        }

        if (!(isUpper(pass1) || isUpper(pass2))) {
            mensajeMostrar += "<br>----------------<br>Una letra de las contraseñas debe ser mayúscula";
            entrar = false;
        }

        if (!tieneNumero(pass1) || !tieneNumero(pass2)) {
            mensajeMostrar += "<br>----------------<br>Un dígito de las contraseñas debe ser un número";
            entrar = false;
        }


        if (pass1 != pass2) {
            mensajeMostrar += "<br>----------------<br>Las contraseñas no coinciden";
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

function isUpper(str) {
    return /[A-Z]/.test(str);
}

function tieneNumero(numero) {
    return /\d/.test(numero);
}
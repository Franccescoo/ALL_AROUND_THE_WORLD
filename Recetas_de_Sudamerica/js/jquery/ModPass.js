$(document).ready(function () {

    $("#formRegi").submit(function (e) {
        e.preventDefault();
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();
      

        let mensajeMostrar = "";
        let entrar = true;


        if ((pass1.length > 60 || pass1.length < 4) || (pass2.length > 60 || pass2.length < 4)) {
            mensajeMostrar += "La contraseñas debe tener entre 4 y 60 caracteres<br>";
            entrar = false; 
        }

        if (!(isUpper(pass1) || isUpper(pass2))) {
            mensajeMostrar += "Una letra de la contraseña debe ser mayúscula<br>";
            entrar = false;
        }

        if (!tieneNumero(pass1) || !tieneNumero(pass2)) {
            mensajeMostrar += "Un dígito de la contraseña debe ser un número<br>";
            entrar = false;
        }


        if (pass1 != pass2) {
            mensajeMostrar += "Las contraseñas no coinciden<br>";
            entrar = false;
        }
        if (entrar) {
            $("#mensajeReg").html("Cambio exitoso");
        }
        else {
            $("#mensajeReg").html(mensajeMostrar);
        }
    });
})



function isUpper(str) {
    return /[A-Z]/.test(str);
}

function tieneNumero(numero) {
    return /\d/.test(numero);
}
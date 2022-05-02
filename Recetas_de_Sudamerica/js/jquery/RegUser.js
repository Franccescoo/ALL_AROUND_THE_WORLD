$(document).ready(function () {

    $("#formRegi").submit(function (e) {
        e.preventDefault();
        var nombre = $("#nomUser").val();
        var ape = $("#apeUser").val();
        var nick = $("#nickUserName").val();
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();

        let mensajeMostrar = "";
        let entrar = true;


        if (!esMayuscula(nombre.charAt(0))) {
            mensajeMostrar += "La primera letra del nombre debe ser mayuscula<br>";
            entrar = false;
        }

        if(!ape==""){

            if (!esMayuscula(ape.charAt(0))) {
                mensajeMostrar += "La primera letra del apellido debe ser mayuscula<br>";
                entrar = false;
            }

        }

        var UltimoDigito = nick.charAt(nick.length-1);
        if(isNaN(UltimoDigito)){
            mensajeMostrar += "El ultimo digito del nombre de usuario debe ser un numero<br>";
            entrar = false;
        }

        if (nick.length < 4 || nick.length > 60) {
            mensajeMostrar += "La longitud del nombre de usuario no es adecuada, debe tener entre 4 y 60 caracteres<br>";
            entrar = false;
        }
        

        if (pass1 != pass2){
            mensajeMostrar += "Las contraseñas no coinciden<br>";
            entrar = false;
        }


        if(entrar){
            $("#mensajeReg").html("Su cuenta ha sido registrada");
            

        }
        else{
            $("#mensajeReg").html(mensajeMostrar);
        }

    });
})

function esMayuscula(letra) {
    return letra == letra.toUpperCase();
};
$(document).ready(function () {

    $("#formRegi").submit(function (e) {
        e.preventDefault();
        var nomb = $("#nomUser").val();
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();

        let mensajeMostrar = "";
        let entrar = false;

        if (nomb.length < 4 || nomb.length > 7) {
            mensajeMostrar += "La longitud no es correcta<br>";
            entrar = true;
        }


        var PrimeraLetra = nomb.charAt(0);
        if (!esMayuscula(PrimeraLetra)) {
            mensajeMostrar += "La primera letra es minuscula<br>";
            entrar = true;
        }

        if (pass1 != pass2){
            mensajeMostrar += "Las contraseñas no coinciden<br>";
            entrar = true;
        }


        if(entrar){
            $("#mensajeReg").html(mensajeMostrar);

        }
        else{
            $("#mensajeReg").html("Formulario Enviado");
        }

    });
})

function esMayuscula(letra) {
    return letra == letra.toUpperCase();
};
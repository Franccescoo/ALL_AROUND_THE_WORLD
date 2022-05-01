$(document).ready(function () {

    $("#formRegi").submit(function (e) {
        e.preventDefault();
        var nomb = $("#nickUserName").val();
        var pass1 = $("#password1").val();
        var pass2 = $("#password2").val();

        let mensajeMostrar = "";
        let entrar = true;

        
        if (nomb.length < 4 || nomb.length > 10) {
            mensajeMostrar += "La longitud del nombre de usuario no es adecuada, debe tener entre 4 y 10 caracteres<br>";
            entrar = false;
        }

        
        var PrimeraLetra = nomb.charAt(0);
        if (!esMayuscula(PrimeraLetra)) {
            mensajeMostrar += "La primera letra del nombre de usuario debe ser mayuscula<br>";
            entrar = false;
        }

        var UltimoDigito = nomb.charAt(nomb.length-1);
        if(isNaN(UltimoDigito)){
            mensajeMostrar += "El ultimo digito del nombre de usuario debe ser un numero<br>";
            entrar = false;
        }
        

        if (pass1 != pass2){
            mensajeMostrar += "Las contraseñas no coinciden<br>";
            entrar = false;
        }


        if(entrar){
            $("#mensajeReg").html("Formulario Enviado");
            

        }
        else{
            $("#mensajeReg").html(mensajeMostrar);
        }

    });
})

function esMayuscula(letra) {
    return letra == letra.toUpperCase();
};
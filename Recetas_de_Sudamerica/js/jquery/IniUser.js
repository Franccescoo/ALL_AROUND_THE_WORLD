$(document).ready(function () {

    $("#log").submit(function (e) {
        e.preventDefault();
        var nomb = $("#nomUser").val();
        var pass = $("#pass").val();
    
        let mensajeMostrar = "";
        let entrar = false;
        let aceptado = "Iniciar sesion";
        $("#iniUser").html("");
        $("#iniAdmin").html("");
    
        if (nomb == "ara" && pass == "ara"){
            mensajeMostrar += "Cuenta Encontrada<br>";
            entrar = true;
        }
        else if (nomb == "ere" && pass == "ere"){
            mensajeMostrar += "Cuenta Encontrada<br>";
            entrar = true;
        }
        if(entrar){
            $("#mensajeLog").html(mensajeMostrar);
            
            if(nomb == "ara"){
                $("#iniUser").html(aceptado);
            }
            else if(nomb == "ere"){
                $("#iniAdmin").html(aceptado);
            }

        }
        else{
            $("#mensajeLog").html("Usuario y/o contraseña incorrectos");
        }

    });
})
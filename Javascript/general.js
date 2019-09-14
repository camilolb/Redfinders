
function LoguearUsuario()
{
    var usuario = $("#email").val();
    var password = $("#password").val();

    var url = "C:/Users/Camilo/Desktop/Maqueta/";

    debugger;

    if(usuario.trim() === "admin"
    && password.trim() === "admin")
    {
        window.location.href = "./validNumber.html";
        //location.replace(url + "validNumber.html")
    }else{
        alert("Usuario o contraseña incorrectos");
    }

}



$( document ).ready(function() {
    
    var resolucion = window.screen.width;
    

    if(resolucion >= 768){
        $(".cerrarMenu").addClass("ocultar");
    }else{
        $(".menuNavegacion").addClass("ocultar");
    }

    $(".cerrarMenu").click(function(){
        $(".menuNavegacion").toggle();
    })

});


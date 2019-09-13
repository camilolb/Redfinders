


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


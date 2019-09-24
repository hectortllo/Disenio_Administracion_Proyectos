$(document).ready(function () {
    //Scroll elementos menú
    var redes = $("#redes").offset().top,
        evento = $("#evento").offset().top;

    $("#btn-contacto").on("click", function(e){
        e.preventDefault();
        console.log("hola");
        $("html, body").animate({
            scrollTop: redes
        }, 500)
    })

    $("#btn-evento").on("click", function(e){
        e.preventDefault();
        console.log("hola");
        $("html, body").animate({
            scrollTop: evento
        }, 500)
    })
});
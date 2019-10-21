function findMe(){
    var output = document.getElementById('map');
    if(navigator.geolocation){
        output.innerHTML = "<p>Tu navegador soporta Geolocalización</p>";
    } else {
        output.innerHTML = "<p>Tu navegador no soporta Geolocalización</p>";
    }

    function localizacion(posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;

        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"
        +latitude+","+longitude+"&key=AIzaSyBSXG_yr3Ni-njGrPEjEC9z9u1lzqwmmoA";


        output.innerHTML = "<img src='"+imgURL+"'>";
    }

    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }

    navigator.geolocation.getCurrentPosition(localizacion, error);
}

$(document).ready(function(){
    $("#agregar").on("click", function(){

        var linea = document.createElement("HR");
        TitulosNuevaLocalidad.appendChild(linea);
        

        var Localidad = document.createElement("p");
        var numeroFilas = document.createElement("p");
        var CantidadSillas = document.createElement("p");
        var Costo = document.createElement("p");

        crearElementosTitulos(Localidad, "Nombre: ");
        crearElementosTitulos(numeroFilas, "Número de filas: ");
        crearElementosTitulos(CantidadSillas, "Cantidad de asientos: ");
        crearElementosTitulos(Costo, "Costo: ");
        


        var inputLocalidad = document.createElement("input");
        var inputNumeroFilas = document.createElement("input");
        var inputCantidadSillas = document.createElement("input");
        var inputCostoLocalidad = document.createElement("input");

        crearElementos(inputLocalidad, "Platinum");
        crearElementos(inputNumeroFilas, "10");
        crearElementos(inputCantidadSillas, "50");
        crearElementos(inputCostoLocalidad, "500");
        
        
    });

    function crearElementos(elemento, nombre){
        elemento.setAttribute("type", "text");
        elemento.setAttribute("placeholder", nombre);
        elemento.setAttribute("name", nombre);

        nuevaLocalidad.appendChild(elemento);
    }

    function crearElementosTitulos(elemento, mensaje){
        elemento.innerText = mensaje;
        TitulosNuevaLocalidad.appendChild(elemento);
    }
});
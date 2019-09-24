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
$(window).on("hashchange", function () {
    if(location.hash.slice(1)=="lugar"){
        $(".card").addClass("extend");
        $("#datos_principales").removeClass("selected");
        $("#lugar").addClass("selected");
    } else {
        $(".card").removeClass("extend");
        $("#datos_principales").addClass("selected");
        $("#lugar").removeClass("selected");
    }
  });

$(window).trigger("hashchange");
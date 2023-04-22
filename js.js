function abrirCerrar(){
    var element = document.getElementById("menuMovil");
    if (element.classList == "disactive"){
        element.classList.remove("disactive");
        element.classList.add("active");
        document.getElementById("menuMovil").innerHTML = '<div class="mostrarImgMenu">' + '<img src="https://raw.githubusercontent.com/mpatrivic/pruebas/main/cross512.png" />' + '</div>';

    }
    else{
        element.classList.remove("active");
        element.classList.add("disactive");
        document.getElementById("menuMovil").innerHTML = '<div class="mostrarImgMenu">' + '<img src="https://raw.githubusercontent.com/mpatrivic/pruebas/main/menu512.png" />' + '</div>';

    }

    if (element.classList == "active"){
        var elements = document.getElementsByTagName("li")
        elements[0].style.display = "block";
        elements[1].style.display = "block";
        elements[2].style.display = "block";
    }
    else{
        var elements = document.getElementsByTagName("li")
        elements[0].style.display = "none";
        elements[1].style.display = "none";
        elements[2].style.display = "none";
    }
    
}

window.addEventListener("resize", function(){
    if (screen.width > 800) {
        var elements = document.getElementsByTagName("li")
        elements[0].style.display = "block";
        elements[1].style.display = "block";
        elements[2].style.display = "block";

        var element = document.getElementById("menuMovil");
        if (element.classList == "active"){
            element.classList.remove("active");
            element.classList.add("disactive");
            document.getElementById("menuMovil").innerHTML = '<div class="mostrarImgMenu">' + '<img src="https://raw.githubusercontent.com/mpatrivic/pruebas/main/menu512.png" />' + '</div>';

        }
    }

    else{ //} (screen.width < 801) {

        if (document.getElementById("menuMovil").classList == "disactive"){
            var elements = document.getElementsByTagName("li")
            elements[0].style.display = "none";
            elements[1].style.display = "none";
            elements[2].style.display = "none";
            
            document.getElementById("menuMovil").innerHTML = '<div class="mostrarImgMenu">' + '<img src="C:/Users/Carla/Desktop/WEBS/Menu/menu512.png" />' + '</div>';

        }
    }
});


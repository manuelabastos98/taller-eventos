document.addEventListener("DOMContentLoaded", function() {

    let boton = document.getElementsByTagName("button")[0];
    let div = document.getElementsByTagName("div")[0];

    boton.addEventListener("click", saludar);
    div.addEventListener("click", holasoyeldiv);

    function saludar(event) {
        event.stopPropagation(); 
        alert("Hola!");
    }

    function holasoyeldiv() {
    alert("Hola! Soy el div");
    }

});
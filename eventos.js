document.addEventListener("DOMContentLoaded", function() {

    div = document.getElementsByTagName("div")[0];
    div.addEventListener("click", holasoyeldiv)

function holasoyeldiv() {
    alert("Hola! Soy el div");
}
});
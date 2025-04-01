function desplegartabla(){
    let filasocultas = document.querySelectorAll(".desplegable");
    let boton = document.getElementById("boton");
    let Displayfilas = "table-row";
    let Nuevotextoboton = "Ver menos";

    if(filasocultas[0].style.display === "table-row"){
        Displayfilas = "none";
        Nuevotextoboton = "Ver tabla completa";
    }
    for(let i = 0; i<filasocultas.length;i++){
        filasocultas[i].style.display = Displayfilas;
    }
    boton.textContent = Nuevotextoboton;
}


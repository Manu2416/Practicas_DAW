function openTab(evt, idtab) {
   
    let tabcontenido = document.getElementsByClassName("menu-principal");
    for (let i = 0; i < tabcontenido.length; i++) {
        tabcontenido[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(idtab).style.display = "block";

    evt.currentTarget.classList.add("active"); //corregir

  
}

function closeTab(idtab) {

    let tabContent = document.getElementById(idtab);
    tabContent.style.display = "none";

    let tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
}

window.addEventListener("scroll", function() {
    let subtitulos = document.getElementsByClassName("subtitulo"); 

    if (window.scrollY > 5) {
        for (let i = 0; i < subtitulos.length; i++) {
            subtitulos[i].classList.add("hidden"); 
        }
    } else {
        for (let i = 0; i < subtitulos.length; i++) {
            subtitulos[i].classList.remove("hidden"); 
        }
    }
});



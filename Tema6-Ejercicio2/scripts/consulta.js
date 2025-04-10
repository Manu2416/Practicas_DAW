const jovenTab = document.getElementById('joven');
const familiasTab = document.getElementById('familias');
const seniorTab = document.getElementById('senior');

function seleccion(url,text){
    const title = document.getElementsByClassName("consulta-title")[0];
    const fondo = document.getElementsByClassName("fondo-imagen")[0];
    fondo.style.backgroundImage = `url(${url})`;
    fondo.style.backgroundSize = 'cover';  // Asegura que la imagen cubra toda la pantalla
    fondo.style.backgroundPosition = 'center';  // Centra la imagen
    title.innerHTML = text;
}

jovenTab.addEventListener("click",()=>{
    seleccion("images/fondo_joven_1.jpg","SER JOVEN TIENE MUCHAS VENTAJAS");
})

familiasTab.addEventListener("click",()=>{
    seleccion("images/fondo_familia_1.jpg","LOS PEQUES TAMBIÉN TIENEN SU ESPACIO")
})

seniorTab.addEventListener("click",()=>{
    seleccion("images/fondo_senior_1.jpg","UNA BANCA PARA SÉNIORS")
})

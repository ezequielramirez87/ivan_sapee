let cabecera=document.getElementById("cabecera");
let contenido=document.getElementById("boludes");
function aparecer(){
    if(contenido.style.display==="none"){
        contenido.style.display="block";
    }
    else{
        contenido.style.display="none";

    }
}

cabecera.addEventListener("click", aparecer);
function copiarCorreo(){
    const correo = "josejacomem2002@gmail.com";
    navigator.clipboard.writeText(correo).then(() =>{
        const mensaje = document.getElementById("mensaje");
        mensaje.style.display = "block";
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 2000);
    }).catch(err => {
        alert("Hubo un error al copiar el correo" + err);
    });
}

function copiarSky(){
    const sky = "jajacome";
    navigator.clipboard.writeText(sky).then(() => {
        const mensaje1 = document.getElementById("mensaje1");
        mensaje1.style.display = "block";
        setTimeout(() => {
            mensaje1.style.display = "none";
        }, 2000);
    }).catch(err => {
        alert("Hubo un error al copiar el correo" + err);
    });
}
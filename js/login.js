document.getElementById("ingresar").addEventListener("click",function(){
    let email=document.getElementById("correo").value;
    let contraseña=document.getElementById("password").value;
    

    if(email !== "" && contraseña !== "" ) {
        
        window.location.href = "file:///C:/Users/user/Desktop/proyectoobligatorio/proyecto_obligatorio/portada.html"
    } else{
        alert("Debe completar los campos vacios")   
    }

})

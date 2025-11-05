function comprobar(){





    event.preventDefault()
    rdRespuestasP4 = document.getElementsByName("P4")
    respuesta4OK=false
    for (radio of rdRespuestasP4){
        if (radio.checked){
            if (radio.value == "ARPANET"){
                respuesta4OK = true
            }
        }
    }

<<<<<<< HEAD
    if (respuesta4OK){
        document.getElementById("imgP4").src="../media/BienImg.jpg"
    }else{
        document.getElementById("imgP4").src="../media/MalImg.jpg"
    }
    document.getElementById("imgP4").style.visibility="visible"
=======
if (respuestaOK){
    document.getElementById("imgP4").src="../media/BienImg.png"
}else{
    document.getElementById("imgP4").src="../media/MalImg.png"
}
document.getElementById("imgP4").style.visibility="visible"
>>>>>>> 91f4f7fcc6fc147bb82b219d228109cde053021c





    event.preventDefault()
    rdRespuestasP6 = document.getElementsByName("P6")
    respuesta6OK=false
    for (radio of rdRespuestasP6){
        if (radio.checked){
            if (radio.value == "2000"){
                respuesta6OK = true
            }
        }
    }

    if (respuesta6OK){
        document.getElementById("imgP6").src="../media/BienImg.jpg"
    }else{
        document.getElementById("imgP6").src="../media/MalImg.jpg"
    }
    document.getElementById("imgP6").style.visibility="visible"





    event.preventDefault()
    rdRespuestasP8 = document.getElementsByName("P8")
    respuesta8OK=false
    for (radio of rdRespuestasP8){
        if (radio.checked){
            if (radio.value == "CSS"){
                respuesta8OK = true
            }
        }
    }

    if (respuesta8OK){
        document.getElementById("imgP8").src="../media/BienImg.jpg"
    }else{
        document.getElementById("imgP8").src="../media/MalImg.jpg"
    }
    document.getElementById("imgP8").style.visibility="visible"




    event.preventDefault()
    rdRespuestasP11 = document.getElementsByName("P11")
    respuesta11OK=false
    for (radio of rdRespuestasP11){
        if (radio.checked){
            if (radio.value == "Web3.0"){
                respuesta11OK = true
            }
        }
    }

    if (respuesta11OK){
        document.getElementById("imgP11").src="../media/BienImg.jpg"
    }else{
        document.getElementById("imgP11").src="../media/MalImg.jpg"
    }
    document.getElementById("imgP11").style.visibility="visible"
}  

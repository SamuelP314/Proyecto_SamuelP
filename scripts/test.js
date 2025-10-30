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

    if (respuesta4OK){
        document.getElementById("imgP4").src="../media/BienImg.jpg"
    }else{
        document.getElementById("imgP4").src="../media/MalImg.jpg"
    }
    document.getElementById("imgP4").style.visibility="visible"

}  

function comprobar(){
    event.preventDefault()
    rdRespuestasP6 = document.getElementsByName("P6")
    respuesta6OK=false
    for (radio of rdRespuestasP6){
        if (radio.checked){
            if (radio.value == "Años 2000"){
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

}  


function comprobar(){
    event.preventDefault()
    rdRespuestasP4 = document.getElementsByName("P4")
    txtCheck = document.getElementById("txtCheck")
    respuestaOK=false
    for (radio of rdRespuestasP4){
        if (radio.checked){
            txtCheck.innerHTML = "Respuesta: " + radio.value
            if (radio.value == "ARPANET"){
                respuestaOK = true
            }
        }
}

if (respuestaOK){
    document.getElementById("imgP4").src="media/BienImg.png"
}else{
    document.getElementById("imgP4").src="media/MalImg.png"
}
document.getElementById("imgP4").style.visibility="visible"

}
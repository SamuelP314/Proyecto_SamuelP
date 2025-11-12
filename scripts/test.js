function comprobar(event) {
  event.preventDefault();
  RespuestaFinal = true;

  RespuestasP3 = document.getElementById("P3");
  respuesta3OK = false;
  if (RespuestasP3.value == "GuerraFria") {
    respuesta3OK = true;
  } else {
    RespuestaFinal = false;
  }

  if (respuesta3OK == true) {
    document.getElementById("imgP3").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP3").src = "../media/MalImg.png";
  }
  document.getElementById("imgP3").style.visibility = "visible";

  rdRespuestasP4 = document.getElementsByName("P4");
  respuesta4OK = false;
  for (radio of rdRespuestasP4) {
    if (radio.checked) {
      if (radio.value == "ARPANET") {
        respuesta4OK = true;
      } else {
        RespuestaFinal = false;
      }
    }
  }

  if (respuesta4OK == true) {
    document.getElementById("imgP4").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP4").src = "../media/MalImg.png";
  }
  document.getElementById("imgP4").style.visibility = "visible";

  RespuestasP5 = document.getElementById("P5");
  respuesta5OK = false;
  if (RespuestasP5.value == "Tim") {
    respuesta5OK = true;
  } else {
    RespuestaFinal = false;
  }

  if (respuesta5OK == true) {
    document.getElementById("imgP5").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP5").src = "../media/MalImg.png";
  }
  document.getElementById("imgP5").style.visibility = "visible";

  rdRespuestasP6 = document.getElementsByName("P6");
  respuesta6OK = false;
  for (radio of rdRespuestasP6) {
    if (radio.checked) {
      if (radio.value == "2000") {
        respuesta6OK = true;
      } else {
        RespuestaFinal = false;
      }
    }
  }

  if (respuesta6OK == true) {
    document.getElementById("imgP6").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP6").src = "../media/MalImg.png";
  }
  document.getElementById("imgP6").style.visibility = "visible";

  RespuestasP7 = document.getElementsByName("P7");
  respuesta7OK = false;

  if (
    RespuestasP7[0].checked &&
    !RespuestasP7[1].checked &&
    RespuestasP7[2].checked &&
    !RespuestasP7[3].checked &&
    RespuestasP7[4].checked
  ) {
    respuesta7OK = true;
  } else {
    respuesta7OK = false;
  }

  if (respuesta7OK == true) {
    document.getElementById("imgP7").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP7").src = "../media/MalImg.png";
  }
  document.getElementById("imgP7").style.visibility = "visible";

  rdRespuestasP8 = document.getElementsByName("P8");
  respuesta8OK = false;
  for (radio of rdRespuestasP8) {
    if (radio.checked) {
      if (radio.value == "CSS") {
        respuesta8OK = true;
      } else {
        RespuestaFinal = false;
      }
    }
  }

  if (respuesta8OK == true) {
    document.getElementById("imgP8").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP8").src = "../media/MalImg.png";
  }
  document.getElementById("imgP8").style.visibility = "visible";

  RespuestasP9 = document.getElementById("P9");
  respuesta9OK = false;
  if (RespuestasP9.value === "1969-10-29") {
    respuesta9OK = true;
    document.getElementById("imgP9").src = "../media/BienImg.png";
  } else {
    RespuestaFinal = false;
    document.getElementById("imgP9").src = "../media/MalImg.png";
  }
  document.getElementById("imgP9").style.visibility = "visible";

  RespuestasP10 = document.getElementById("P10");
  respuesta10OK = false;
  if (RespuestasP10.value == "Interactividad") {
    respuesta10OK = true;
  } else {
    RespuestaFinal = false;
  }

  if (respuesta10OK == true) {
    document.getElementById("imgP10").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP10").src = "../media/MalImg.png";
  }
  document.getElementById("imgP10").style.visibility = "visible";

  rdRespuestasP11 = document.getElementsByName("P11");
  respuesta11OK = false;
  for (radio of rdRespuestasP11) {
    if (radio.checked) {
      if (radio.value == "Web3.0") {
        respuesta11OK = true;
      } else {
        RespuestaFinal = false;
      }
    }
  }

  if (respuesta11OK == true) {
    document.getElementById("imgP11").src = "../media/BienImg.png";
  } else {
    document.getElementById("imgP11").src = "../media/MalImg.png";
  }
  document.getElementById("imgP11").style.visibility = "visible";

  if (RespuestaFinal == true) {
    DivPremio = document.getElementById("DivPremio");
    DivPremio.innerHTML = "";
    const imgPremio = document.createElement("img");
    imgPremio.src = "../media/Premio.png";
    DivPremio.appendChild(imgPremio);
  }

  document.querySelectorAll(".DivPregunta").forEach((div) => {
    if (div.querySelector('img[src$="BienImg.png"]')) {
      div.style.backgroundColor = "rgba(0, 200, 0, 0.3)";
    }
  });

  document.querySelectorAll(".DivPregunta").forEach((div) => {
    if (div.querySelector('img[src$="MalImg.png"]')) {
      div.style.backgroundColor = "rgba(200, 0, 0, 0.3)";
    }
  });
}

function limpiar(event) {
  imagenesLimpiar = document.getElementsByClassName("imgPreg");
  divsLimpiar = document.getElementsByClassName("DivPregunta");
  for (img of imagenesLimpiar) {
    img.src = "";
  }
  for (div of divsLimpiar) {
    div.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  }
}

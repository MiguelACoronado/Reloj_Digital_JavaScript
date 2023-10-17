function calcularTiempo(){
    
    let time = new Date();

    let horas = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaReloj = horas + ":" + minutos + ":" + segundos;
    let relojDigital = document.querySelector(".reloj")
    relojDigital.innerHTML = pantallaReloj;

}

setInterval(calcularTiempo, 1000);

function actualizarReloj(){
    const now = new Date();
    const horas = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();

    const Hora = `${horas}`;
    const Minutos = `${minutos}`;
    const Segundos = `${segundos}`;

    document.getElementById('hora').innerText = Hora;
    document.getElementById('minut').innerText = Minutos;
    document.getElementById('segundo').innerText = Segundos;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
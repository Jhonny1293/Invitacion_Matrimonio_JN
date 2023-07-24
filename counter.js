document.addEventListener('DOMContentLoaded', function() {
  // Establecer la fecha objetivo para el conteo regresivo (YYYY-MM-DD HH:MM:SS)
  const fechaObjetivo = '2023-10-06 16:30:00';

  function actualizarContador() {
    const ahora = new Date().getTime();
    const fechaObjetivoMs = new Date(fechaObjetivo).getTime();

    const tiempoRestante = fechaObjetivoMs - ahora;

    const segundos = Math.floor((tiempoRestante / 1000) % 60);
    const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
    const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

    console.log(segundos);
    document.getElementById('dias').innerHTML = dias >= 0 ? dias : 0;
    document.getElementById('horas').innerHTML = horas >= 0 ? horas : 0;
    document.getElementById('minutos').innerHTML = minutos >= 0 ? minutos: 0;
    document.getElementById('segundos').innerHTML = segundos  >= 0 ? segundos : 0;
  }

  // Actualizar el contador cada segundo
  setInterval(actualizarContador, 1000);
});

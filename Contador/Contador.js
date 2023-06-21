document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('count');
  const decremento = document.getElementById('decremento');
  const incremento = document.getElementById('incremento');
  const segundosInput = document.getElementById('segundos');
  const botonInicio = document.getElementById('inicio');
  const botonParar = document.getElementById('parar');
  let count = 0;
  let temporizador;

  decremento.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
  });

  incremento.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
  });

  botonInicio.addEventListener('click', () => {
    const segundos = parseInt(segundosInput.value);
    if (segundos > 0) {
      startTimer(segundos);
    }
  });

  botonParar.addEventListener('click', () => {
    clearInterval(temporizador);
    alert('Temporizador detenido');
  });

  function startTimer(segundos) {
    clearInterval(temporizador);
    temporizador = setInterval(() => {
      segundos--;
      if (segundos >= 0) {
        segundosInput.value = segundos;
      } else {
        clearInterval(temporizador);
        alert('Tiempo terminado');
      }
    }, 1000);
  }
});

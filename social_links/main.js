var botones = document.querySelectorAll('.button');

botones.forEach(function(boton, index) {
  boton.addEventListener('click', function() {
    redirigir(index + 1); 
  });
});

function redirigir(numero) {
  var urls = ['https://web.whatsapp.com', 'https://www.facebook.com', 'https://github.com/martincaycho', 'https://es.fiverr.com/martinf_?up_rollout=true', 'https://www.instagram.com'];
  if (numero >= 1 && numero <= urls.length) {
    window.location.href = urls[numero - 1];
  } else {
    console.error('Número de botón inválido');
  }
}
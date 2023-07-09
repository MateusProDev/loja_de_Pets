var carrossel = document.getElementById('myCarousel');

    carrossel.addEventListener('click', function() {
      if (carrossel.classList.contains('paused')) {
        carrossel.classList.remove('paused');
      } else {
        carrossel.classList.add('paused');
      }
    });
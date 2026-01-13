window.addEventListener('load', () => {
    const u1 = localStorage.getItem('u1_ipad');
    const u2 = localStorage.getItem('u2_ipad');
    if (u1) document.getElementById('v1').src = u1;
    if (u2) document.getElementById('v2').src = u2;
});

// Lógica para el Zoom Interno (Escalado)
document.querySelectorAll('.zoom-slider').forEach(slider => {
  slider.addEventListener('input', (e) => {
    const idIframe = e.target.getAttribute('data-id');
    const iframe = document.getElementById(idIframe);
    const scale = e.target.value / 100;
    
    // Ajustamos el transform para el zoom
    iframe.style.transform = `scale(${scale})`;
    
    // Compensamos el ancho/alto para que no queden huecos blancos
    iframe.style.width = (100 / scale) + "%";
    iframe.style.height = (100 / scale) + "%";
  });
});

// Botones de URL
document.querySelectorAll('.btn-url').forEach(boton => {
  boton.addEventListener('click', () => {
    const idIframe = boton.getAttribute('data-id');
    const iframe = document.getElementById(idIframe);
    const newUrl = prompt("Ingresa URL:", iframe.src);
    
    if (newUrl && newUrl !== "about:blank") {
      iframe.src = newUrl;
      localStorage.setItem('u' + idIframe.charAt(1) + '_ipad', newUrl);
    }
  });
});

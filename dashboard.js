window.addEventListener('load', () => {
    const u1 = localStorage.getItem('u1_ipad');
    const u2 = localStorage.getItem('u2_ipad');
    if (u1) document.getElementById('v1').src = u1;
    if (u2) document.getElementById('v2').src = u2;
});

document.querySelectorAll('.zoom-slider').forEach(slider => {
  slider.addEventListener('change', (e) => { // 'change' es mejor que 'input' para tablets lentas
    const idIframe = e.target.getAttribute('data-id');
    const iframe = document.getElementById(idIframe);
    const val = e.target.value;
    
    // Cambiamos el tamaño relativo en lugar de usar efectos visuales pesados
    iframe.style.width = (10000 / val) + "%";
    iframe.style.height = (10000 / val) + "%";
    iframe.style.transform = `scale(${val / 100})`;
    iframe.style.transformOrigin = "0 0";
  });
});

document.querySelectorAll('.btn-url').forEach(boton => {
  boton.addEventListener('click', () => {
    const idIframe = boton.getAttribute('data-id');
    const newUrl = prompt("URL:", document.getElementById(idIframe).src);
    if (newUrl) {
      document.getElementById(idIframe).src = newUrl;
      localStorage.setItem('u' + idIframe.charAt(1) + '_ipad', newUrl);
    }
  });
});

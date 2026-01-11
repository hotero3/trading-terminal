// 1. Cargar URLs guardadas en el iPad
window.addEventListener('load', () => {
    const u1 = localStorage.getItem('u1_ipad');
    const u2 = localStorage.getItem('u2_ipad');
    
    if (u1) document.getElementById('v1').src = u1;
    if (u2) document.getElementById('v2').src = u2;
});

// 2. Botones de URL
document.querySelectorAll('.btn-url').forEach(boton => {
  boton.addEventListener('click', () => {
    const idIframe = boton.getAttribute('data-id');
    const iframe = document.getElementById(idIframe);
    const newUrl = prompt("Ingresa la URL para este panel:", iframe.src);
    
    if (newUrl && newUrl !== "about:blank") {
      iframe.src = newUrl;
      localStorage.setItem('u' + idIframe.charAt(1) + '_ipad', newUrl);
    }
  });
});

// 3. Botones de ZOOM
document.querySelectorAll('.btn-zoom').forEach(boton => {
  boton.addEventListener('click', () => {
    const idIframe = boton.getAttribute('data-id');
    const src = document.getElementById(idIframe).src;
    if (src && src !== "about:blank") {
      document.getElementById('zoomFrame').src = src;
      document.getElementById('zoomBox').style.display = 'flex';
    }
  });
});

document.getElementById('btnCloseZoom').addEventListener('click', () => {
  document.getElementById('zoomBox').style.display = 'none';
  document.getElementById('zoomFrame').src = '';
});

// 1. Cargar URLs guardadas en el iPad
window.addEventListener('load', () => {
    const u2 = localStorage.getItem('u2');
    const u3 = localStorage.getItem('u3');
    const u4 = localStorage.getItem('u4');
    
    if (u2) document.getElementById('v2').src = u2;
    if (u3) document.getElementById('v3').src = u3;
    if (u4) document.getElementById('v4').src = u4;
});

// 2. Botones de URL
document.querySelectorAll('.btn-url').forEach(boton => {
  boton.addEventListener('click', () => {
    const idIframe = boton.getAttribute('data-id');
    const iframe = document.getElementById(idIframe);
    const newUrl = prompt("URL para este panel:", iframe.src);
    
    if (newUrl && newUrl !== "about:blank") {
      iframe.src = newUrl;
      localStorage.setItem('u' + idIframe.charAt(1), newUrl);
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
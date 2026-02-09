const form = document.getElementById('form');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const nombre = data.get('nombre') || '';
  const empresa = data.get('empresa') || '';
  const telefono = data.get('telefono') || '';
  const mensaje = data.get('mensaje') || '';
  const body = `Nombre: ${nombre}
Empresa: ${empresa}
Teléfono: ${telefono}

Mensaje:
${mensaje}`;
  const mail = '_________@____.com';
  const subject = encodeURIComponent('Cotización SERVILOG CITIMAR');
  window.location.href = `mailto:${mail}?subject=${subject}&body=${encodeURIComponent(body)}`;
});

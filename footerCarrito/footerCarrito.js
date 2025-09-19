import { finalizarCompra } from '../control/carrito.js';

const footer = document.createElement('footer');

// Crear botón
const boton = document.createElement('button');
boton.textContent = 'Finalizar Compra';
boton.id = 'btn-finalizar-compra';

// Evento al botón
boton.addEventListener('click', function() {
    if (finalizarCompra()) {
        alert('¡Compra finalizada con éxito!');
        window.location.href = "../paginas/envios.html";
    } else {
        alert('Tu carrito está vacío');
    }
});

footer.appendChild(boton);
export function footerCarrito() {
    return footer;
}
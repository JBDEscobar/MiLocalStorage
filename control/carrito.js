const CARRITO = 'carrito';

// Agregar producto al carrito
export function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador();
}

// Obtener carrito completo
export function obtenerCarrito() {
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

// Guardar carrito
export function guardarCarrito(carrito) {
    localStorage.setItem(CARRITO, JSON.stringify(carrito));
}

// Actualizar número del contador
export function actualizarContador() {
    const contador = document.querySelector('.div-item');
    if (contador) {
        contador.textContent = obtenerCarrito().length;
    }
}

// Vaciar carrito
export function vaciarCarrito() {
    guardarCarrito([]);
    actualizarContador();
}
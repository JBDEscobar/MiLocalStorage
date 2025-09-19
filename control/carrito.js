const CARRITO = 'carrito';
const PEDIDOS = 'pedidos'; // Nueva clave para pedidos finalizados

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

// NUEVA FUNCIÓN: Finalizar compra y mover a pedidos
export function finalizarCompra() {
    const carrito = obtenerCarrito();
    
    if (carrito.length > 0) {
        // Crear pedido con fecha y productos
        const pedido = {
            fecha: new Date().toLocaleString(),
            productos: carrito,
            estado: "Procesando"
        };
        
        // Guardar en historial de pedidos
        const pedidos = obtenerPedidos();
        pedidos.push(pedido);
        localStorage.setItem(PEDIDOS, JSON.stringify(pedidos));
        
        // Vaciar carrito
        vaciarCarrito();
        
        return true;
    }
    return false;
}

// NUEVA FUNCIÓN: Obtener historial de pedidos
export function obtenerPedidos() {
    return JSON.parse(localStorage.getItem(PEDIDOS)) || [];
}
import { obtenerProductos } from "../../modulo/miLocalStorage.js";  
import { obtenerCarrito } from "../../control/carrito.js";

function footer() {
    let nav = document.createElement("footer");
    nav.className = "nav-papa";

    // Botón Casa - redirecciona a home
    let casaLink = document.createElement("a");
    casaLink.className = "div-casa";
    casaLink.href = "../../index.html";  // Desde components/footer/ a la raíz
    casaLink.textContent = "🏠";
    nav.appendChild(casaLink);

    // Botón Paquete - redirecciona a página de envíos
    let pedidosLink = document.createElement("a");
    pedidosLink.className = "div-casa";
    pedidosLink.href = "../../paginas/envios.html";  // Desde components/footer/ a paginas/
    pedidosLink.textContent = "📦";
    nav.appendChild(pedidosLink);

    // Botón Usuario - redirecciona a página de perfil
    let perfilLink = document.createElement("a");
    perfilLink.className = "div-casa";
    perfilLink.href = "../../paginas/perfil.html";  // Desde components/footer/ a paginas/
    perfilLink.textContent = "👤";
    nav.appendChild(perfilLink);

    // Botón Carrito
    let carritoLink = document.createElement("a");
    carritoLink.className = "div-casa";
    carritoLink.href = "../../paginas/carrito.html";  // Desde components/footer/ a paginas/
    carritoLink.innerHTML = "🛒";
    
    let divItem = document.createElement('div');
    divItem.className = "div-item";
    divItem.textContent = obtenerCarrito().length; 
    
    carritoLink.appendChild(divItem);
    nav.appendChild(carritoLink);

    return nav;
}

export { footer };
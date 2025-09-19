import { productos } from "../../modulo/productos.js";
import { agregarAlCarrito } from "../../control/carrito.js";


function renderProductos() {
    const productosContainer = document.createElement('div');
    productosContainer.className = "papa";
    
    productos.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = "informacion";
        productoCard.innerHTML = `
            <img src="${producto.thumbnail}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.short_description}</p>
            <span class="genre">${producto.genre}</span>
            <span class="platform">${producto.platform}</span>
        `;
        
        productoCard.style.cursor = 'pointer';
        productoCard.addEventListener('click', () => {
            agregarAlCarrito(producto); 
        });
        
        productosContainer.appendChild(productoCard);
    });
    
    return productosContainer;
}

export { renderProductos };
import { obtenerProductos } from "../../modulo/miLocalStorage.js";  
import { obtenerCarrito } from "../../control/control(carrito).js";

function footer() {
    let nav = document.createElement("footer");
    nav.className = "nav-papa";

    // Botones
    let div1 = document.createElement("div");
    div1.className = "div-casa";
    div1.textContent = "🏠";
    nav.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "div-casa";
    div2.textContent = "📦";
    nav.appendChild(div2);

    let div3 = document.createElement("div");
    div3.className = "div-casa";
    div3.textContent = "❓";
    nav.appendChild(div3);

   let div4 = document.createElement("a");
    div4.className = "div-casa";
    div4.href = "paguinas/carrito.html";
    div4.innerHTML = "🛒";
    
    let divItem = document.createElement('div');
    divItem.className = "div-item";
    divItem.textContent = obtenerCarrito().length; 
    
    div4.appendChild(divItem);
    nav.appendChild(div4);

    return nav;
}

export { footer };
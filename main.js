import { header } from "./components/header/header.js"
import { renderProductos } from "./components/section/section.js";
import {footer} from "./components/footer/footer.js"


function seccion(){
    let sectionElement = document.createElement("section");



    /* Header encabezado  */
    sectionElement.appendChild(header());

/* section.js  productos.js  */

    sectionElement.appendChild(renderProductos()); 



    /* Footer menu   */


    sectionElement.appendChild(footer());



    //carrito


    if (!localStorage.getItem("carrito")) {
    localStorage.setItem("carrito", JSON.stringify([]));
}

    return sectionElement;
}

document.body.appendChild(seccion());
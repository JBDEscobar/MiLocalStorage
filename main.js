import { header } from "./components/header/header.js"
import { renderProductos } from "./components/section/section.js";


function seccion(){
    let sectionElement = document.createElement("section");
    sectionElement.appendChild(header());
    sectionElement.appendChild(renderProductos()); 

    return sectionElement;
}

document.body.appendChild(seccion());
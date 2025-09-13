function header(){


    let header = document.createElement("header");
    header.className = "header";
    
   
    let titulo = document.createElement("h1");
    titulo.className = "titulo";
    titulo.innerText = "Tienda VGEscobar";
    header.appendChild(titulo);

    
    let divImg = document.createElement("div");
    let logo = document.createElement("img");
    logo.className = "logo";
    logo.src = "https://i.pinimg.com/736x/01/ac/5b/01ac5b864a6c29efb24c1145aeb9c7be.jpg";
    
    divImg.appendChild(logo);
    header.appendChild(divImg);

    return header;
}

export { header };
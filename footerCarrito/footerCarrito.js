const footer = document.createElement('footer');


const botonLink = document.createElement('a');
botonLink.href = "../index.html";
botonLink.textContent = 'Finalizar Compra';
botonLink.id = 'btn-finalizar-compra';
botonLink.className = 'botonLink';


botonLink.addEventListener('click', function(e) {
   
    alert('¡Compra finalizada con éxito!');
   
});


footer.appendChild(botonLink);

export function footerCarrito() {
    return footer;
}


const USUARIO_KEY = 'usuarioData';

// Guardar datos
export function guardarUsuario(datos) {
    localStorage.setItem(USUARIO_KEY, JSON.stringify(datos));
}

// Obtener datos
export function obtenerUsuario() {
    return JSON.parse(localStorage.getItem(USUARIO_KEY)) || {};
}


export function crearInterfazUsuario() {
    const contenedor = document.createElement('div');
    
    // Cargar datos existentes
    const datos = obtenerUsuario();
    
   
    const editable = document.createElement('div');
    editable.contentEditable = true;
    editable.textContent = datos.texto || 'Escribe algo aquí...';
    contenedor.appendChild(editable);
   
    const boton = document.createElement('button');
    boton.textContent = 'Guardar';
    contenedor.appendChild(boton);
    
    // Mostrar datos guardados
    const mostrar = document.createElement('div');
    mostrar.textContent = datos.texto ? `Guardado: ${datos.texto}` : 'No hay datos guardados';
    contenedor.appendChild(mostrar);
    
   
    boton.addEventListener('click', () => {
        const texto = editable.textContent;
        guardarUsuario({ texto });
        mostrar.textContent = `Guardado: ${texto}`;
        alert('Datos guardados!');
    });
    
    return contenedor;
}
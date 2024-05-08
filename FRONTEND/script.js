// headers de las tablas
const headers = {
    usuarios: ['Número de Socio', 'Nombre'],
    libros: ['ID Libro', 'Título', 'Autor', 'ID Categoría'],
    prestamos: ['ID Préstamo', 'Número de Socio', 'ID Libro', 'Fecha de Préstamo', 'Fecha de Devolución'],
    categorias: ['ID Categoría', 'Nombre de Categoría']
}

let tipoTablaActual = ''; // Variable para almacenar el tipo de tabla actual

document.addEventListener('DOMContentLoaded', function() {
    mostrarUsuarios(); // Llama a la función mostrarUsuarios() cuando la página se carga
});

function mostrarUsuarios() {
    tipoTablaActual = 'usuarios'; // Establece el tipo de tabla actual
    fetch('http://localhost:5000/api/getUsuarios')
    .then(response => response.json())
    .then(data => {
        const cuerpoTabla = document.getElementById('cuerpo-tabla');
        cuerpoTabla.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevos datos

        // Agregar encabezados de tabla
        const encabezadoTabla = document.getElementById('tabla-encabezado');
        encabezadoTabla.innerHTML = '';
        headers.usuarios.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            encabezadoTabla.appendChild(th);
        });

        // Agregar filas a la tabla
        data.forEach(usuario => {
            const fila = document.createElement('tr');
            usuario.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener usuarios:', error));
}

function mostrarLibros() {
    tipoTablaActual = 'libros'; // Establece el tipo de tabla actual
    fetch('http://localhost:5000/api/getLibros')
    .then(response => response.json())
    .then(data => {
        const cuerpoTabla = document.getElementById('cuerpo-tabla');
        cuerpoTabla.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevos datos

        // Agregar encabezados de tabla
        const encabezadoTabla = document.getElementById('tabla-encabezado');
        encabezadoTabla.innerHTML = '';
        headers.libros.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            encabezadoTabla.appendChild(th);
        });

        // Agregar filas a la tabla
        data.forEach(libro => {
            const fila = document.createElement('tr');
            libro.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener libros:', error));
}

function mostrarPrestamos() {
    tipoTablaActual = "prestamos";
    fetch('http://localhost:5000/api/getPrestamos')
    .then(response => response.json())
    .then(data => {
        const cuerpoTabla = document.getElementById('cuerpo-tabla');
        cuerpoTabla.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevos datos

        // Agregar encabezados de tabla
        const encabezadoTabla = document.getElementById('tabla-encabezado');
        encabezadoTabla.innerHTML = '';
        headers.prestamos.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            encabezadoTabla.appendChild(th);
        });

        // Agregar Filas a la tabla
        data.forEach(prestamo => {
            const fila = document.createElement('tr');
            prestamo.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener préstamos:', error));
}


function mostrarCategorias() {
    tipoTablaActual = "categorias";
    fetch('http://localhost:5000/api/getCategorias')
    .then(response => response.json())
    .then(data => {
        const cuerpoTabla = document.getElementById('cuerpo-tabla');
        cuerpoTabla.innerHTML = ''; // Limpiar el cuerpo de la tabla antes de agregar nuevos datos

        // Agregar encabezados de tabla
        const encabezadoTabla = document.getElementById('tabla-encabezado');
        encabezadoTabla.innerHTML = '';
        headers.categorias.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            encabezadoTabla.appendChild(th);
        });

        // Agregar Filas a la tabla
        data.forEach(categoria => {
            const fila = document.createElement('tr');
            categoria.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener categorías:', error));
}


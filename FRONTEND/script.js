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

function clearActiveClass() {
    // Remove active class from all buttons
    document.querySelectorAll('.navbar-nav .nav-item .btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

function mostrarUsuarios() {
    tipoTablaActual = 'usuarios';
    // Clear active class from all buttons
    clearActiveClass();
    document.querySelector('.nav-item.usuarios .btn').classList.add('active');
    fetch('http://172.16.5.109:5000/api/getUsuarios')
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

        // Agregar encabezado adicional para el botón de borrar
        const thEditar = document.createElement('th');
        thEditar.textContent = 'Editar';
        encabezadoTabla.appendChild(thEditar);

        // Agregar filas a la tabla
        data.forEach(usuario => {
            // Crear una fila
            const fila = document.createElement('tr');

            // Agregar celdas a la fila
            usuario.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });

            // Crear la celda para el botón de borrar
            const celdaBorrar = document.createElement('td');

            // Crear el botón de borrar
            const botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>`;
            

            botonBorrar.classList.add('btn', 'btn-danger', 'btn-borrar'); // Aplica la clase CSS
            botonBorrar.dataset.idUsuario = usuario[0]; // Guarda el ID del usuario en un atributo de datos
            botonBorrar.addEventListener('click', function() {
                // Llamar a la función para borrar usuario y pasar el ID del usuario
                borrarUsuario(this.dataset.idUsuario);
            });

            // Agregar el botón de borrar a la celda correspondiente
            celdaBorrar.appendChild(botonBorrar);

            // Agregar la celda al final de la fila
            fila.appendChild(celdaBorrar);

            // Agregar la fila al cuerpo de la tabla
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener usuarios:', error));
}



function mostrarLibros() {
    tipoTablaActual = 'libros';
    // Clear active class from all buttons
    clearActiveClass();
    document.querySelector('.nav-item.libros .btn').classList.add('active');
    fetch('http://172.16.5.109:5000/api/getLibros')
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

        // Agregar encabezado adicional para el botón de borrar
        const thEditar = document.createElement('th');
        thEditar.textContent = 'Editar';
        encabezadoTabla.appendChild(thEditar);

        // Agregar filas a la tabla
        data.forEach(libro => {
            const fila = document.createElement('tr');
            libro.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });

            // Crear la celda para el botón de borrar
            const celdaBorrar = document.createElement('td');

            // Crear el botón de borrar
            const botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>`;
            botonBorrar.classList.add('btn', 'btn-danger', 'btn-borrar'); // Aplica la clase CSS
            botonBorrar.dataset.idLibro = libro[0]; // Guarda el ID del libro en un atributo de datos
            botonBorrar.addEventListener('click', function() {
                // Llamar a la función para borrar libro y pasar el ID del libro
                borrarLibro(this.dataset.idLibro);
            });

            // Agregar el botón de borrar a la celda correspondiente
            celdaBorrar.appendChild(botonBorrar);

            // Agregar la celda al final de la fila
            fila.appendChild(celdaBorrar);

            // Agregar la fila al cuerpo de la tabla
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener libros:', error));
}


function mostrarPrestamos() {
    tipoTablaActual = 'prestamos';
    // Clear active class from all buttons
    clearActiveClass();
    document.querySelector('.nav-item.prestamos .btn').classList.add('active');
    fetch('http://172.16.5.109:5000/api/getPrestamos')
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

        // Agregar encabezado adicional para el botón de borrar
        const thEditar = document.createElement('th');
        thEditar.textContent = 'Editar';
        encabezadoTabla.appendChild(thEditar);

        // Agregar Filas a la tabla
        data.forEach(prestamo => {
            const fila = document.createElement('tr');
            prestamo.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });

            // Crear la celda para el botón de borrar
            const celdaBorrar = document.createElement('td');

            // Crear el botón de borrar
            const botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>`;
            botonBorrar.classList.add('btn', 'btn-danger', 'btn-borrar'); // Aplica la clase CSS
            botonBorrar.dataset.idPrestamo = prestamo[0]; // Guarda el ID del préstamo en un atributo de datos
            botonBorrar.addEventListener('click', function() {
                // Llamar a la función para borrar préstamo y pasar el ID del préstamo
                borrarPrestamo(this.dataset.idPrestamo);
            });

            // Agregar el botón de borrar a la celda correspondiente
            celdaBorrar.appendChild(botonBorrar);

            // Agregar la celda al final de la fila
            fila.appendChild(celdaBorrar);

            // Agregar la fila al cuerpo de la tabla
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener préstamos:', error));
}



function mostrarCategorias() {
    tipoTablaActual = 'categorias';
    // Clear active class from all buttons
    clearActiveClass();
    document.querySelector('.nav-item.categoria .btn').classList.add('active'); // Cambiado de .nav-item.categorias a .nav-item.categoria
    fetch('http://172.16.5.109:5000/api/getCategorias')
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

        // Agregar encabezado adicional para el botón de borrar
        const thEditar = document.createElement('th');
        thEditar.textContent = 'Editar';
        encabezadoTabla.appendChild(thEditar);

        // Agregar Filas a la tabla
        data.forEach(categoria => {
            const fila = document.createElement('tr');
            categoria.forEach(dato => {
                const celda = document.createElement('td');
                celda.textContent = dato;
                fila.appendChild(celda);
            });

            // Crear la celda para el botón de borrar
            const celdaBorrar = document.createElement('td');

            // Crear el botón de borrar
            const botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>`;
            botonBorrar.classList.add('btn', 'btn-danger', 'btn-borrar'); // Aplica la clase CSS
            botonBorrar.dataset.idCategoria = categoria[0]; // Guarda el ID de la categoría en un atributo de datos
            botonBorrar.addEventListener('click', function() {
                // Llamar a la función para borrar categoría y pasar el ID de la categoría
                borrarCategoria(this.dataset.idCategoria);
            });

            // Agregar el botón de borrar a la celda correspondiente
            celdaBorrar.appendChild(botonBorrar);

            // Agregar la celda al final de la fila
            fila.appendChild(celdaBorrar);

            // Agregar la fila al cuerpo de la tabla
            cuerpoTabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al obtener categorías:', error));
}




function borrarUsuario(num_socio) {
    confirmarEliminacion("¿Estás seguro de que deseas eliminar este usuario?", function(confirmado) {
        if (confirmado) {
            fetch(`http://172.16.5.109:5000/api/borrarUsuario/${num_socio}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log('Usuario borrado exitosamente');
                    mostrarUsuarios();
                } else {
                    console.error('Error al borrar usuario:', response.statusText);
                }
            })
            .catch(error => console.error('Error al borrar usuario:', error));
        }
    });
}

function borrarLibro(id_libro) {
    confirmarEliminacion("¿Estás seguro de que deseas eliminar este libro?", function(confirmado) {
        if (confirmado) {
            fetch(`http://172.16.5.109:5000/api/borrarLibro/${id_libro}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log('Libro borrado exitosamente');
                    mostrarLibros();
                } else {
                    console.error('Error al borrar libro:', response.statusText);
                }
            })
            .catch(error => console.error('Error al borrar libro:', error));
        }
    });
}

function borrarPrestamo(id_prestamo) {
    confirmarEliminacion("¿Estás seguro de que deseas eliminar este préstamo?", function(confirmado) {
        if (confirmado) {
            fetch(`http://172.16.5.109:5000/api/borrarPrestamo/${id_prestamo}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log('Préstamo eliminado exitosamente');
                    mostrarPrestamos();
                } else {
                    console.error('Error al eliminar préstamo:', response.statusText);
                }
            })
            .catch(error => console.error('Error al eliminar préstamo:', error));
        }
    });
}

function borrarCategoria(id_categoria) {
    confirmarEliminacion("¿Estás seguro de que deseas eliminar esta categoría?", function(confirmado) {
        if (confirmado) {
            fetch(`http://172.16.5.109:5000/api/borrarCategoria/${id_categoria}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log('Categoría eliminada exitosamente');
                    mostrarCategorias();
                } else {
                    console.error('Error al eliminar categoría:', response.statusText);
                }
            })
            .catch(error => console.error('Error al eliminar categoría:', error));
        }
    });
}



function confirmarEliminacion(mensaje, callback) {
    // Mostrar un cuadro de diálogo de confirmación al usuario
    const confirmacion = confirm(mensaje);
    
    // Llamar al callback con el resultado de la confirmación
    callback(confirmacion);
}



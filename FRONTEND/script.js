        
  function mostrarTabla(idTabla) {
      // Ocultar todas las tablas
      const tablas = document.querySelectorAll('.tabla-container');
      tablas.forEach(tabla => {
          tabla.classList.remove('tabla-activo');
      });

      // Mostrar la tabla correspondiente
      const tabla = document.getElementById(idTabla);
      tabla.classList.add('tabla-activo');
  }

  function mostrarUsuarios('tabla-usuarios', 'http://127.0.0.1:5000/api/getUsuarios') {
      const tabla = document.createElement('table'); // Crear tabla dinámicamente
      tabla.classList.add('table', 'table-striped', 'table-bordered'); // Añadir clases de Bootstrap
      const contenedorTabla = document.querySelector('.tabla-container'); // Obtener el contenedor de la tabla

      fetch(url)
          .then(response => response.json())
          .then(data => {
              // Crear encabezados de tabla
              const thead = document.createElement('thead');
              const tr = document.createElement('tr');
              for (const column in data[0]) {
                  const th = document.createElement('th');
                  th.textContent = column;
                  tr.appendChild(th);
              }
              thead.appendChild(tr);
              tabla.appendChild(thead);

              // Crear filas de tabla
              const tbody = document.createElement('tbody');
              data.forEach(rowData => {
                  const tr = document.createElement('tr');
                  for (const value of Object.values(rowData)) {
                      const td = document.createElement('td');
                      td.textContent = value;
                      tr.appendChild(td);
                  }
                  tbody.appendChild(tr);
              });
              tabla.appendChild(tbody);

              // Eliminar cualquier tabla anterior antes de mostrar la nueva
              while (contenedorTabla.firstChild) {
                  contenedorTabla.removeChild(contenedorTabla.firstChild);
              }

              // Mostrar la nueva tabla en el contenedor
              contenedorTabla.appendChild(tabla);
          })
          .catch(error => console.error('Error al obtener datos:', error));
  }

  function mostrarLibros('tabla-libros', 'http://127.0.0.1:5000/api/getLibros') {
      const tabla = document.createElement('table'); // Crear tabla dinámicamente
      tabla.classList.add('table', 'table-striped', 'table-bordered'); // Añadir clases de Bootstrap
      const contenedorTabla = document.querySelector('.tabla-container'); // Obtener el contenedor de la tabla

      fetch(url)
          .then(response => response.json())
          .then(data => {
              // Crear encabezados de tabla
              const thead = document.createElement('thead');
              const tr = document.createElement('tr');
              for (const column in data[0]) {
                  const th = document.createElement('th');
                  th.textContent = column;
                  tr.appendChild(th);
              }
              thead.appendChild(tr);
              tabla.appendChild(thead);

              // Crear filas de tabla
              const tbody = document.createElement('tbody');
              data.forEach(rowData => {
                  const tr = document.createElement('tr');
                  for (const value of Object.values(rowData)) {
                      const td = document.createElement('td');
                      td.textContent = value;
                      tr.appendChild(td);
                  }
                  tbody.appendChild(tr);
              });
              tabla.appendChild(tbody);

              // Eliminar cualquier tabla anterior antes de mostrar la nueva
              while (contenedorTabla.firstChild) {
                  contenedorTabla.removeChild(contenedorTabla.firstChild);
              }

              // Mostrar la nueva tabla en el contenedor
              contenedorTabla.appendChild(tabla);
          })
          .catch(error => console.error('Error al obtener datos:', error));
  }

  function mostrarPrestamos('tabla-prestamos', 'http://127.0.0.1:5000/api/getPrestamos') {
      const tabla = document.createElement('table'); // Crear tabla dinámicamente
      tabla.classList.add('table', 'table-striped', 'table-bordered'); // Añadir clases de Bootstrap
      const contenedorTabla = document.querySelector('.tabla-container'); // Obtener el contenedor de la tabla

      fetch(url)
          .then(response => response.json())
          .then(data => {
              // Crear encabezados de tabla
              const thead = document.createElement('thead');
              const tr = document.createElement('tr');
              for (const column in data[0]) {
                  const th = document.createElement('th');
                  th.textContent = column;
                  tr.appendChild(th);
              }
              thead.appendChild(tr);
              tabla.appendChild(thead);

              // Crear filas de tabla
              const tbody = document.createElement('tbody');
              data.forEach(rowData => {
                  const tr = document.createElement('tr');
                  for (const value of Object.values(rowData)) {
                      const td = document.createElement('td');
                      td.textContent = value;
                      tr.appendChild(td);
                  }
                  tbody.appendChild(tr);
              });
              tabla.appendChild(tbody);

              // Eliminar cualquier tabla anterior antes de mostrar la nueva
              while (contenedorTabla.firstChild) {
                  contenedorTabla.removeChild(contenedorTabla.firstChild);
              }

              // Mostrar la nueva tabla en el contenedor
              contenedorTabla.appendChild(tabla);
          })
          .catch(error => console.error('Error al obtener datos:', error));
  }

  function mostrarCategorias('tabla-categorias', 'http://127.0.0.1:5000/api/getCategorias') {
      const tabla = document.createElement('table'); // Crear tabla dinámicamente
      tabla.classList.add('table', 'table-striped', 'table-bordered'); // Añadir clases de Bootstrap
      const contenedorTabla = document.querySelector('.tabla-container'); // Obtener el contenedor de la tabla

      fetch(url)
          .then(response => response.json())
          .then(data => {
              // Crear encabezados de tabla
              const thead = document.createElement('thead');
              const tr = document.createElement('tr');
              for (const column in data[0]) {
                  const th = document.createElement('th');
                  th.textContent = column;
                  tr.appendChild(th);
              }
              thead.appendChild(tr);
              tabla.appendChild(thead);

              // Crear filas de tabla
              const tbody = document.createElement('tbody');
              data.forEach(rowData => {
                  const tr = document.createElement('tr');
                  for (const value of Object.values(rowData)) {
                      const td = document.createElement('td');
                      td.textContent = value;
                      tr.appendChild(td);
                  }
                  tbody.appendChild(tr);
              });
              tabla.appendChild(tbody);

              // Eliminar cualquier tabla anterior antes de mostrar la nueva
              while (contenedorTabla.firstChild) {
                  contenedorTabla.removeChild(contenedorTabla.firstChild);
              }

              // Mostrar la nueva tabla en el contenedor
              contenedorTabla.appendChild(tabla);
          })
          .catch(error => console.error('Error al obtener datos:', error));
  }






// Referencias al DOM
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const selectPrioridad = document.getElementById('select-prioridad');
const listaTareas = document.getElementById('lista-tareas');
const buscarTarea = document.getElementById('buscar-tarea');
// Botón modo oscuro
const toggle = document.getElementById('toggle-dark');
const html = document.documentElement;
module.exports = {
  darkMode: 'class', // 👈 importante, ya que usas toggle por clase
  content: ["./index.html", "./**/*.js"],
  theme: { extend: {} },
  plugins: [],
}
// Cargar preferencia guardada
if (localStorage.getItem('modoOscuro') === 'activo') {
    html.classList.add('dark');
}

// Cambiar modo
toggle.addEventListener('click', () => {

    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        localStorage.setItem('modoOscuro', 'activo');
    } else {
        localStorage.removeItem('modoOscuro');
    }

});

// Cargar tareas desde localStorage
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Guardar tareas
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Renderizar tareas
function renderTareas(filter = '') {

    listaTareas.innerHTML = '';

    tareas
        .filter(t => t.texto.toLowerCase().includes(filter.toLowerCase()))
        .forEach((tarea, index) => {

            const divTarea = document.createElement('div');

            // clases dinámicas con prioridad
            let prioridadClase = '';

            if (tarea.prioridad === 'alta') {
                prioridadClase = 'border-l-4 border-red-500';
            }

            if (tarea.prioridad === 'media') {
                prioridadClase = 'border-l-4 border-yellow-400';
            }

            if (tarea.prioridad === 'baja') {
                prioridadClase = 'border-l-4 border-green-500';
            }

            divTarea.className = `
                flex justify-between items-center
                p-4 rounded shadow
                ${prioridadClase}
                bg-white dark:bg-gray-800
                text-gray-800 dark:text-gray-100
                transition transform hover:-translate-y-1 hover:shadow-lg
            `;

            divTarea.innerHTML = `
                <div>
                    <h3 class="font-semibold">${tarea.texto}</h3>
                    <span class="text-sm text-gray-500 dark:text-gray-300">
                        Prioridad: ${tarea.prioridad}
                    </span>
                </div>

                <button class="btn-eliminar px-3 py-1 bg-red-500 text-white rounded 
hover:bg-red-600 hover:scale-110 hover:shadow-lg transition duration-200">
✖
</button>
            `;

            // eliminar tarea
            divTarea.querySelector('.btn-eliminar').addEventListener('click', () => {

                tareas.splice(index, 1);

                guardarTareas();

                renderTareas(buscarTarea.value);

            });

            listaTareas.appendChild(divTarea);

        });

}

// Añadir tarea
formTarea.addEventListener('submit', e => {

    e.preventDefault();

    const texto = inputTarea.value.trim();

    if (texto === '') return;

    tareas.push({
        texto,
        prioridad: selectPrioridad.value
    });

    guardarTareas();

    renderTareas(buscarTarea.value);

    inputTarea.value = '';

});

// Buscar tareas
buscarTarea.addEventListener('input', e => {

    renderTareas(e.target.value);

});

// Inicializar
renderTareas();
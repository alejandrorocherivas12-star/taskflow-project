// Referencias al DOM
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const selectPrioridad = document.getElementById('select-prioridad');
const listaTareas = document.getElementById('lista-tareas');
const buscarTarea = document.getElementById('buscar-tarea');

// Cargar tareas desde localStorage o inicializar array vacío
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Función para guardar tareas en localStorage
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para renderizar tareas en el DOM
function renderTareas(filter = '') {
    listaTareas.innerHTML = '';
    tareas
        .filter(t => t.texto.toLowerCase().includes(filter.toLowerCase()))
        .forEach((tarea, index) => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('tarjeta', `tarea-prioridad-${tarea.prioridad}`);
        divTarea.innerHTML = `
            <div>
                <h3>${tarea.texto}</h3>
                <span class="categoria">Prioridad: ${tarea.prioridad}</span>
            </div>
            <button class="btn-eliminar">✖</button>
        `;
        // Evento para eliminar tarea
        divTarea.querySelector('.btn-eliminar').addEventListener('click', () => {
            tareas.splice(index, 1);
            guardarTareas();
            renderTareas(buscarTarea.value);
        });

        listaTareas.appendChild(divTarea);
    });
}

// Añadir nueva tarea
formTarea.addEventListener('submit', e => {
    e.preventDefault();
    const texto = inputTarea.value.trim();
    if (texto === '') return;

    tareas.push({ texto, prioridad: selectPrioridad.value });
    guardarTareas();
    renderTareas(buscarTarea.value);

    inputTarea.value = '';
});

// Filtrado en tiempo real
buscarTarea.addEventListener('input', e => {
    renderTareas(e.target.value);
});

// Inicializar app
renderTareas();
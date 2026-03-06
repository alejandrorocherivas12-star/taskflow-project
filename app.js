// Referencias al DOM
const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const selectPrioridad = document.getElementById('select-prioridad');
const listaTareas = document.getElementById('lista-tareas');
const buscarTarea = document.getElementById('buscar-tarea');
const toggle = document.getElementById('toggle-dark');
const html = document.documentElement;

// ================= MODO OSCURO =================
// Activar modo oscuro si estaba guardado
if(localStorage.getItem('modoOscuro') === 'activo') {
    html.classList.add('dark');
}

// Alternar modo oscuro
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');

    if(html.classList.contains('dark')) {
        localStorage.setItem('modoOscuro','activo');
    } else {
        localStorage.removeItem('modoOscuro');
    }
});
// ================= TAREAS =================
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Guardar tareas
function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Renderizar tareas
function renderTareas(filtro='') {
  listaTareas.innerHTML = '';

  tareas.filter(t => t.texto.toLowerCase().includes(filtro.toLowerCase()))
        .forEach((tarea,index) => {

    const div = document.createElement('div');

    let prioridad = '';
    if(tarea.prioridad === 'alta') prioridad='border-l-4 border-red-500';
    if(tarea.prioridad === 'media') prioridad='border-l-4 border-yellow-400';
    if(tarea.prioridad === 'baja') prioridad='border-l-4 border-green-500';

    div.className = `
      flex justify-between items-center p-4 rounded shadow
      ${prioridad} bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100
      transition transform hover:-translate-y-1 hover:shadow-lg
    `;

    div.innerHTML = `
      <div>
        <h3 class="font-semibold">${tarea.texto}</h3>
        <span class="text-sm text-gray-500 dark:text-gray-300">Prioridad: ${tarea.prioridad}</span>
      </div>
      <button class="btn-eliminar px-3 py-1 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700 hover:scale-110 transition" aria-label="Eliminar tarea">✖</button>
    `;

    // Eliminar tarea
    div.querySelector('.btn-eliminar').addEventListener('click', () => {
      tareas.splice(index,1);
      guardarTareas();
      renderTareas(buscarTarea.value);
    });

    listaTareas.appendChild(div);
  });
}

// Añadir tarea
formTarea.addEventListener('submit', e => {
  e.preventDefault();
  const texto = inputTarea.value.trim();
  if (!texto) return;

  tareas.push({texto, prioridad: selectPrioridad.value});
  guardarTareas();
  renderTareas(buscarTarea.value);
  inputTarea.value = '';
});

// Buscar tareas
buscarTarea.addEventListener('input', e => renderTareas(e.target.value));

// Inicializar
renderTareas();
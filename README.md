<h1>TaskFlow / Tasklist</h1>

  <h2>Descripción</h2>
  <p><strong>TaskFlow</strong> es una aplicación web simple de gestión de tareas con:</p>
  <ul>
    <li>Creación de tareas con <strong>prioridad</strong> (alta, media, baja)</li>
    <li><strong>Modo oscuro</strong> que se recuerda en el navegador</li>
    <li><strong>Buscador de tareas</strong> en tiempo real</li>
    <li>Persistencia de datos usando <strong>localStorage</strong> (no requiere servidor)</li>
    <li>Interfaz moderna con <strong>Tailwind CSS</strong>, animaciones y efectos hover</li>
  </ul>

  <h2>Vista previa</h2>
  <ul>
    <li>Barra lateral con navegación: Inicio, Tareas, Categorías, Ajustes</li>
    <li>Formulario para añadir tareas con prioridad</li>
    <li>Lista de tareas con colores según prioridad:
      <ul>
        <li>🔴 Alta</li>
        <li>🟡 Media</li>
        <li>🟢 Baja</li>
      </ul>
    </li>
    <li>Botón de <strong>Modo Oscuro</strong> que alterna el tema y lo guarda</li>
    <li>Buscador para filtrar tareas en tiempo real</li>
  </ul>

  <h2>Tecnologías utilizadas</h2>
  <ul>
    <li><strong>HTML5</strong> – Estructura del contenido</li>
    <li><strong>Tailwind CSS</strong> – Estilos y animaciones</li>
    <li><strong>JavaScript</strong> – Lógica de tareas, modo oscuro y búsqueda</li>
    <li><strong>localStorage</strong> – Guardado de tareas y estado de modo oscuro</li>
  </ul>
  <p>Opcionalmente, se puede migrar a <strong>React + Tailwind</strong> para un proyecto más profesional.</p>

  <h2>Cómo usar</h2>

  <h3>Abrir la página</h3>
  <p>Solo abre el archivo <code>index.html</code> en cualquier navegador moderno.</p>

  <h3>Añadir tareas</h3>
  <ol>
    <li>Escribe la tarea en el campo “Nueva tarea…”</li>
    <li>Selecciona la prioridad (alta, media, baja)</li>
    <li>Presiona <strong>Añadir</strong></li>
  </ol>

  <h3>Eliminar tareas</h3>
  <p>Haz clic en la “✖” junto a la tarea que quieras eliminar.</p>

  <h3>Buscar tareas</h3>
  <p>Escribe en el campo “Buscar…” para filtrar la lista en tiempo real.</p>

  <h3>Modo oscuro</h3>
  <p>Haz clic en <strong>Modo Oscuro</strong> en la barra lateral. El tema se guarda en el navegador y se recuerda al recargar la página.</p>

  <h2>Estructura de archivos</h2>
  <pre>
project/
│
├── index.html          ← Página principal
├── script.js           ← Lógica de tareas y modo oscuro
├── style.css           ← Tailwind CSS (si no usas CDN)
├── README.md           ← Este archivo
  </pre>
  <p>Nota: Si usas <strong>Tailwind CDN</strong>, no necesitas <code>style.css</code>.</p>

  <h2>Personalización</h2>
  <ul>
    <li>Cambia los colores de prioridad editando las clases Tailwind:
      <ul>
        <li>border-red-500 → alta</li>
        <li>border-yellow-400 → media</li>
        <li>border-green-500 → baja</li>
      </ul>
    </li>
    <li>Cambia el tema oscuro modificando clases en Tailwind con <code>dark:</code></li>
  </ul>

  <h2>Requisitos</h2>
  <ul>
    <li>Navegador moderno (Chrome, Edge, Firefox, Safari)</li>
    <li>No se requiere servidor ni instalación</li>
  </ul>

  <h2>Extra</h2>
  <ul>
    <li>Los datos de tareas y modo oscuro se guardan en <strong>localStorage</strong>, así que si cierras y abres el navegador, tu información se mantiene</li>
    <li>La aplicación es <strong>responsiva</strong> y funciona en dispositivos móviles y escritorio</li>
  </ul>

  <h2>Enlace del Proyecto</h2>
  <p><a href="https://taskflow-project-ofx2.vercel.app/" target="_blank">https://taskflow-project-ofx2.vercel.app/</a></p>

</body>
</html>

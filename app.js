const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function agregarTarea() {
  rl.question('Ingrese el indicador de la tarea: ', (indicador) => {
    rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
      const tarea = {
        indicador,
        descripcion,
        completado: false
      };

      tareas.push(tarea);
      console.log('Tarea agregada con éxito.');
      MostrarMenu();
    });
  });
}

function eliminarTarea() {
  rl.question('Ingrese el índice de la tarea que desea eliminar: ', (index) => {
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('Índice inválido.');
    }
    MostrarMenu();
  });
}

function completaTarea() {
  rl.question('Ingrese el índice de la tarea que desea completar: ', (index) => {
    if (index >= 0 && index < tareas.length) {
      tareas[index].completado = true;
      console.log('Tarea completada con éxito.');
    } else {
      console.log('Índice inválido.');
    }
    MostrarMenu();
  });
}

function MostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    const status = tarea.completado ? '[x]' : '[ ]';
    console.log(`${index}. ${status} ${tarea.indicador} - ${tarea.descripcion}`);
  });
  MostrarMenu();
}

function MostrarMenu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Opción seleccionada: ', (option) => {
    switch (option) {
      case '1':
        agregarTarea();
        break;
      case '2':
        eliminarTarea();
        break;
      case '3':
        completaTarea();
        break;
      case '4':
        MostrarTareas();
        break;
      case '5':
        console.log('Gracias, nos vemos pronto.');
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        MostrarMenu();
        break;
    }
  });
}

MostrarMenu();

const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];


const questionAsync = util.promisify(rl.question).bind(rl);

function agregarTarea() {
  return questionAsync('Ingrese el indicador de la tarea: ')
    .then((indicador) => questionAsync('Ingrese la descripción de la tarea: ')
      .then((descripcion) => {
        const tarea = {
          indicador,
          descripcion,
          completado: false
        };
        tareas.push(tarea);
        console.log('Tarea agregada con éxito.');
      })
    );
}

function eliminarTarea() {
  return questionAsync('Ingrese el índice de la tarea que desea eliminar: ')
    .then((index) => {
      if (index >= 0 && index < tareas.length) {
        tareas.splice(index, 1);
        console.log('Tarea eliminada con éxito.');
      } else {
        console.log('Índice inválido.');
      }
    });
}

function completarTarea() {
  return questionAsync('Ingrese el índice de la tarea que desea completar: ')
    .then((index) => {
      if (index >= 0 && index < tareas.length) {
        tareas[index].completado = true;
        console.log('Tarea completada con éxito.');
      } else {
        console.log('Índice inválido.');
      }
    });
}

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    const status = tarea.completado ? '[x]' : '[ ]';
    console.log(`${index}. ${status} ${tarea.indicador} - ${tarea.descripcion}`);
  });
}

async function mostrarMenu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  try {
    const option = await questionAsync('Opción seleccionada: ');
    switch (option) {
      case '1':
        await agregarTarea();
        break;
      case '2':
        await eliminarTarea();
        break;
      case '3':
        await completarTarea();
        break;
      case '4':
        mostrarTareas();
        break;
      case '5':
        console.log('Gracias, nos vemos pronto.');
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        mostrarMenu();
        break;
    }
    
  } catch (error) {
    console.error('Error:', error);
    rl.close();
  }
}

mostrarMenu();


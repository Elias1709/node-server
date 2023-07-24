const http = require('http');

const port = 3000;

const tareas = [
  {
    id: 1,
    descripcion: 'Sacar la basura',
    estado: "pendiente",
  },
  {
    id: 2,
    descripcion: 'Barrer la casa',
    estado: "completa",
  },
  {
    id: 3,
    descripcion: 'Cocinar',
    estado: "pendiente",
  },
];

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/tareas') {
    res.statusCode = 200;
    res.end(JSON.stringify(tareas));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Recurso no encontrado' }));
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

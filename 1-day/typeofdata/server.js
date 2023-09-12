const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    const htmlFilePath = 'index.html'; // Ruta al archivo HTML
    fs.readFile(htmlFilePath, 'utf8', function (err, html) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Archivo HTML no encontrado');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    });
  } else {
    // Añade aquí la lógica para manejar otras rutas si es necesario
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = 8080;

server.listen(PORT, function () {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

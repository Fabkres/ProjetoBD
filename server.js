//Estrutura básica API - estudo parte 0
//Criando rotas - estudo parte 1
const http = require('http');
const app = require('./app')
const port = process.env.PORT || 5600;
const server = http.createServer(app);
// Abrir em: localhost:5600/
server.listen(port); 
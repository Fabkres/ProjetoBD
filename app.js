//Estrutura básica API - estudo parte 0
//Criando rotas - estudo parte 1
const express = require('express');
const app = express();
const morgan = require('morgan'); // mostra informações do CRUD em tempo real
const bodyParser = require('body-parser') // 

// CRIANDO AS ROTAS
// const rotaProdutos = require('./routes/produtos');
// const rotaPedidos = require('./routes/pedidos');
const roteUser = require('./routes/user');

// FERRAMENTAS E UTILITÁRIOS
app.use(morgan('dev'));
// ajuda a analisar o corpo das requisições HTTP que contém dados no formato JSON
app.use(bodyParser.urlencoded({ extended: false }));
// Adotada em aplicações que só aceita json de entrada no body
app.use(bodyParser.json());


// CHAMANDO ROTAS
// app.use('/produtos', rotaProdutos);
app.use('/user', roteUser);


// TRATAMENTO DE ERROS!
// Tratamento para verificar rota (quando não encontra rota)
app.use((req, res, next) => {
    const erro = new Error('Objeto não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});



//  usado para analisar as rotas, tempo de execução, porta, etc.
// app.use('/teste-fab', (req, res, next) => {
//     // buscar na página cat http - que tem vários status
//     res.status(200).send({
//         mensagem: 'Ok, deu ainda gg!'
//     });
// });

module.exports = app;
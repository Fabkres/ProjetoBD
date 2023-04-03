const express = require('express');
const router = express.Router();

//Método Get
// retorna todos os dados
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de dados'
    });
});

//Método Post
// insere um dado (produto)
router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de dados',
        ProdutoCriado: produto
    });
});


// Exemplo GET - passando parâmetro na rota
// retorna o dado de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    // Teste para analisar o dado recebido
    if (id === 'fabricia') {
        res.status(200).send({
            mensagem: 'Olá Fabrícia, seja bem vinda!',
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
        });
    }
    res.status(200).send({
        mensagem: 'Usando GET retorna um dado exclusivo',
        id: id
    });
});



//Método Patch
// altera um dado
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de dados'
    });
});

//Método DELETE
// deleta um dado
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de dados'
    });
});

module.exports = router;
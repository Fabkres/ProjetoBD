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
// insere um dado
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de dados'
    });
});

router.post('/', (req, res, next) => {
    const pedido = {
        id_pedido: req.body.id_pedido,
        qtd: req.body.qtd
    }
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de dados',
        PedidoCriado: pedido
    });
});



// Exemplo GET - passando parâmetro na rota
// retorna o dado de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    // Teste para analisar o dado recebido
    res.status(200).send({
        mensagem: 'Você passou um ID',
        id_pedido: id
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
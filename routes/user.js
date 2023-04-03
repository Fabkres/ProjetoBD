const express = require('express');
const router = express.Router();
const user_list = [{}]; // vetor de user

//Método Get
// retorna todos os dados
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de usuários'
    });
});

//Método Post
// insere um dado (user com cpf, nome e data_nasc)
router.post('/', (req, res, next) => {
    const user = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        data_de_nasc: req.body.data_de_nasc
    };
    // Add o user no arquivo
    user_list.push(user);
    res.status(201).send({
        mensagem: 'Dados inseridos com sucesso!',
        mensagem: 'Informações:',
        AddUsuario: user
    });
});




// Exemplo GET - passando parâmetro na rota
// retorna o dado de um user
router.get('/:cpf', (req, res, next) => {
    const cpf = req.params.cpf;
    const User = user_list.find(u => u.cpf === cpf);
    if (User) {
        res.status(200).send({
            mensagem: 'O usuário foi encontrado',
            mensagem: 'Informações:',
            Usuario: User
        });
    } else {
        res.status(404).send('O usuário passado não encontrado'); // acessar dados json
    }
});


//Método Patch
// altera um dado
// router.patch('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Usando PATCH dentro da rota de dados'
//     });
// });

//Método DELETE
// deleta um dado
// router.delete('/', (req, res, next) => {
//     res.status(201).send({
//         mensagem: 'Usando DELETE dentro da rota de dados'
//     });
// });

module.exports = router;
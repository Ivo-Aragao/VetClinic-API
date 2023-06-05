const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Acessando administração');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando administração com o id: ' + userId);
});

router.post('/', (req, res) => {
  const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`;
  res.send('Acessando administração via post:\n' + corpo);
});

router.patch('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando administração com o id: ' + userId);
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando administração via put com o id: ' + userId);
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando administração via delete com o id: ' + userId);
});

module.exports = router;

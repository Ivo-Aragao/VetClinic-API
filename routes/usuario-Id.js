const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Acessando administração');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando rotas com o id: ' + userId);
});

router.patch('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando rotas com o id: ' + userId);
});

router.patch('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando rotas com o id: ' + userId);
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando rotas via put com o id: ' + userId);
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send('Acessando rotas via delete com o id: ' + userId);
});

module.exports = router;

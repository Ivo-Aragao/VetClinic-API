const express = require('express');
const router = express.Router();

let users = [
  {
    "id": 1,
    "name": "Jonh Doe",
    "phone": "85989323895",
    "email": "jose.abreu@compasso.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "61760000",
    "pets": [
      {
        "id": 1,
        "name": "Lilo",
        "species": "dog",
        "carry": "p",
        "weight": 5,
        "date_of_birth": "1993-12-12 10:10"
      }
    ]
  }
];

router.get('/', (req, res) => {
  res.send('Acessando informações:\n' + JSON.stringify(users, null, 2));
});

router.post('/', (req, res) => {
  const userId = req.body.id;

  const existingUser = users.find(user => user.id === userId);

  if (existingUser) {
    res.status(400).send('Usuário já existe com o ID fornecido');
  } else {
    const user = {
      id: userId,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      zip_code: req.body.zip_code,
      pets: req.body.pets || []
    };

    users.push(user);

    res.redirect(`/tutor/${userId}`);
  }
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.send('Acessando informações com o id: ' + userId + ':\n' + JSON.stringify(user, null, 2));
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

router.patch('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email= req.body.email,
    user.date_of_birth= req.body.date_of_birth,
    user.zip_code= req.body.zip_code,
    user.pets= req.body.pets || []

    res.send('Usuário atualizado com sucesso');
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    const updatedUser = {
      id: userId,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      zip_code: req.body.zip_code,
      pets: req.body.pets || []
    };

    users[userIndex] = updatedUser;

    res.send('Usuário atualizado:\n' + JSON.stringify(updatedUser, null, 2));
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send('Usuário removido com sucesso');
  } else {
    res.status(404).send('Usuário não encontrado');
  }
});

module.exports = router;
module.exports.users = users;

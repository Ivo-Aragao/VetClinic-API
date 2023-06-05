const express = require('express');
const router = express.Router();
const { users } = require('./tutor');

router.get('/', (req, res) => {
  const pets = [];

  for (const user of users) {
    for (const pet of user.pets) {
      pets.push(pet);
    }
  }

  res.send('Acessando informações dos pets:\n' + JSON.stringify(pets, null, 2));
});


router.post('/:tutorId', (req, res) => {
  const tutorId = parseInt(req.params.tutorId);
  const tutor = users.find(user => user.id === tutorId);

  if (!tutor) {
    res.status(404).send('Tutor não encontrado');
    return;
  }

  const newPet = {
    id: req.body.id,
    name: req.body.name,
    species: req.body.species,
    carry: req.body.carry,
    weight: req.body.weight,
    date_of_birth: req.body.date_of_birth,
  };

  tutor.pets.push(newPet);

  res.send('Novo pet adicionado ao tutor:\n' + JSON.stringify(newPet, null, 2));
});

router.put('/:petId/tutor/:tutorId', (req, res) => {
  const petId = parseInt(req.params.petId);
  const tutorId = parseInt(req.params.tutorId);

  const tutor = users.find(user => user.id === tutorId);
  if (!tutor) {
    res.status(404).send('Tutor não encontrado');
    return;
  }

  const pet = tutor.pets.find(pet => pet.id === petId);
  if (!pet) {
    res.status(404).send('Pet não encontrado');
    return;
  }

  pet.name = req.body.name;
  pet.species = req.body.species;
  pet.carry = req.body.carry;
  pet.weight = req.body.weight;
  pet.date_of_birth = req.body.date_of_birth;

  res.send('Informações do pet atualizadas:\n' + JSON.stringify(pet, null, 2));
});

router.delete('/:petId/tutor/:tutorId', (req, res) => {
  const petId = parseInt(req.params.petId);
  const tutorId = parseInt(req.params.tutorId);

  const tutor = users.find(user => user.id === tutorId);
  if (!tutor) {
    res.status(404).send('Tutor não encontrado');
    return;
  }

  const petIndex = tutor.pets.findIndex(pet => pet.id === petId);
  if (petIndex === -1) {
    res.status(404).send('Pet não encontrado');
    return;
  }

  const deletedPet = tutor.pets.splice(petIndex, 1)[0];

  res.send('Pet excluído:\n' + JSON.stringify(deletedPet, null, 2));
});

module.exports = router;

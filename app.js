const express = require('express');
const cors = require('cors');
const app = express();
const tutorRoutes = require('./routes/tutor');
const usuarioRoutes = require('./routes/usuario-Id');
const petRoutes = require('./routes/pet');

app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization');
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  } else {
    next();
  }
});

app.use((req, res, next) => {
  console.log('Executando middleware em nível de aplicação');
  return next();
});

function logReq(req, res, next) {
  console.log('Executando a função middleware para rota de usuários');
  return next();
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1> Primeiro desafio Node - VetClinic!');
});

app.use('/tutor', tutorRoutes);
app.use('/usuario-Id', usuarioRoutes);
app.use('/pet', petRoutes);

app.get('*', (req, res, next) => {
  setImmediate(() => {
    next(new Error('Temos um erro!'));
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('Servidor rodando em: http://localhost:3000');
});


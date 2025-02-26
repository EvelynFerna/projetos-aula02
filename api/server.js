const express = require('express');
const cors = require('cors');
const app = express();

const rotas = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(3000, () => {
    console.log('Servidor Respondendo em http://localhost:3000');
});                                        
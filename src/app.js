
// IMPORTAR O EXPRESS

const express = require('express')

// IMPORTAR  AS ROTAS
const router = require('./router.js')


const app = express();

app.use(express.json());


// USAR A ROTAR

app.use(router);


// \/ - SERVE PARA EXPORTAR O ARQUIVO APP - OU HABILITAR A EXPORTAÇÃO  

module.exports = app;

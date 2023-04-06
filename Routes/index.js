const express = require('express');
const routes = express.Router();
const {validarCampos,UsuarioExiste} = require('../midlewears/funcoes');
const  usuarioControler = require('../Controller/Users');

routes.post('/usuario',validarCampos,UsuarioExiste,usuarioControler.create);
routes.get('/usuarios',usuarioControler.Listar);
routes.get('/usuario/:id',usuarioControler.Listar_um_usuario);
routes.put('/usuario/:id',usuarioControler.Atualizar)
routes.delete('/usuario/:id',usuarioControler.Deletar);

module.exports = routes;

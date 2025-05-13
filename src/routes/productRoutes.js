const express = require('express');
// Importa o framework Express
const ProductController = require('../controllers/productController.js');
// Importa o controller responsável por gerenciar as ações de produtos
const router = express.Router();
// Cria uma nova instância de roteador do Express
// Define as rotas
router.get('/', ProductController.getAll);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);
module.exports = router;
// Exporta o roteador configurado para ser usado no app principal

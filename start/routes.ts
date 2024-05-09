/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CargosController from '../app/controllers/cargos_controller.js'
import ClientesController from '../app/controllers/clientes_controller.js'
import ComandasController from '../app/controllers/comandas_controller.js'
import FormPagamentosController from '../app/controllers/form_pagamentos_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import IngredientesController from '../app/controllers/ingredientes_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'
import ProdIngredientesController from '../app/controllers/prod_ingredientes_controller.js'
import TiposController from '../app/controllers/tipos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/nome', async () => {
  return {
    nome: 'Orion',
  }
})

router.resource('/clientes', ClientesController).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()
router.resource('/pagamentos', FormPagamentosController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/ingredientes', IngredientesController).apiOnly()
router.resource('/prod_ingredientes', ProdIngredientesController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/produtos', ProdutosController).apiOnly()


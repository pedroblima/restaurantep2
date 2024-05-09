// import type { HttpContext } from '@adonisjs/core/http'

import ProdIngrediente from "../models/prod_ingrediente.js";

export default class ProdIngredientesController {
    async index() {
        return await ProdIngrediente.all()
    }
}
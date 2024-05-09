// import type { HttpContext } from '@adonisjs/core/http'

import Ingrediente from "../models/ingrediente.js";

export default class IngredientesController {
    async index() {
        return await Ingrediente.all()
    }
}
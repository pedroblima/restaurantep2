// import type { HttpContext } from '@adonisjs/core/http'

import ProdComanda from "../models/prod_comanda.js";

export default class ProdComandasController {
    async index() {
        return await ProdComanda.all()
    }
}
// import type { HttpContext } from '@adonisjs/core/http'

import Comanda from "../models/comanda.js"

export default class ComandasController {

    async index() {
        return await Comanda.all()
    }
    async store () {
        return [1, 2, 3]
    }
}
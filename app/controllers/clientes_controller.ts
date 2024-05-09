//import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "../models/cliente.js"

export default class ClientesController {

  async index() {
    return await Cliente.all()
}

  async update () {
    return [1, 2, 3]
  }
}
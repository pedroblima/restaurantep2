// import type { HttpContext } from '@adonisjs/core/http'

import Cargo from "../models/cargo.js";

export default class CargosController {
    async index() {
        return await Cargo.all()
    }
}
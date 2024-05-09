// import type { HttpContext } from '@adonisjs/core/http'

import FormPagamento from "../models/form_pagamento.js";

export default class FormPagamentosController {
    async index() {
        return await FormPagamento.all()
    }
}
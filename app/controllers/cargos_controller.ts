// import type { HttpContext } from '@adonisjs/core/http'

import Cargo from "#models/cargo";
import { HttpContext } from "@adonisjs/core/http";

export default class CargosController {

    // Paginação de Cargos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Cargo.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Cargo.findOrFail(params.id)
    }

    // Método para criar algum Cargo pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])
        return await Cargo.create(dados)
    }

    async update({params, request}: HttpContext){
        const cargos = await Cargo.findOrFail(params.id)
        const dados = request.only(['nome'])
        
        cargos.merge(dados)
        return await cargos.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const cargos = await Cargo.findOrFail(params.id)

        await cargos.delete()
        return { msg: 'Registro deletado com sucesso', cargos }

    }
}
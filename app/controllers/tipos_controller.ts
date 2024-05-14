// import type { HttpContext } from '@adonisjs/core/http'

import Tipo from "#models/tipo";
import { HttpContext } from "@adonisjs/core/http";

export default class TiposController {

    // Paginação de Tipos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Tipo.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Tipo.findOrFail(params.id)
    }

    // Método para criar algum Tipo pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])
        return await Tipo.create(dados)
    }

    async update({params, request}: HttpContext){
        const tipos = await Tipo.findOrFail(params.id)
        const dados = request.only(['nome'])
        
        tipos.merge(dados)
        return await tipos.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const tipos = await Tipo.findOrFail(params.id)

        await tipos.delete()
        return { msg: 'Registro deletado com sucesso', tipos }

    }
}
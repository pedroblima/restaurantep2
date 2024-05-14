// import type { HttpContext } from '@adonisjs/core/http'

import Ingrediente from "#models/ingrediente";
import { HttpContext } from "@adonisjs/core/http";

export default class IngredientesController {

    // Paginação de Ingredientes
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Ingrediente.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Ingrediente.findOrFail(params.id)
    }

    // Método para criar algum Ingrediente pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'descricao'])
        return await Ingrediente.create(dados)
    }

    async update({params, request}: HttpContext){
        const ingredientes = await Ingrediente.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])
        
        ingredientes.merge(dados)
        return await ingredientes.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const ingredientes = await Ingrediente.findOrFail(params.id)

        await ingredientes.delete()
        return { msg: 'Registro deletado com sucesso', ingredientes }

    }
}
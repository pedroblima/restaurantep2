// import type { HttpContext } from '@adonisjs/core/http'

import Comanda from "#models/comanda";
import { HttpContext } from "@adonisjs/core/http";

export default class ComandasController {

    // Paginação de Comandas
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Comanda.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Comanda.findOrFail(params.id)
    }

    // Método para criar algum Comanda pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'dataPagamento', 'data'])
        return await Comanda.create(dados)
    }

    async update({params, request}: HttpContext){
        const comandas = await Comanda.findOrFail(params.id)
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'dataPagamento', 'data'])
        
        comandas.merge(dados)
        return await comandas.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const comandas = await Comanda.findOrFail(params.id)

        await comandas.delete()
        return { msg: 'Registro deletado com sucesso', comandas }

    }
}
// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoComanda from "#models/prod_comanda";
import { HttpContext } from "@adonisjs/core/http";

export default class ProdutoComandaController {

    // Paginação de ProdutoComandas
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ProdutoComanda.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await ProdutoComanda.findOrFail(params.id)
    }

    // Método para criar algum ProdutoComanda pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        return await ProdutoComanda.create(dados)
    }

    async update({params, request}: HttpContext){
        const produtosComanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        
        produtosComanda.merge(dados)
        return await produtosComanda.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const produtosComanda = await ProdutoComanda.findOrFail(params.id)

        await produtosComanda.delete()
        return { msg: 'Registro deletado com sucesso', produtosComanda }

    }
}
// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "#models/produto";
import { HttpContext } from "@adonisjs/core/http";

export default class ProdutosController {

    // Paginação de Produtos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Produto.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Produto.findOrFail(params.id)
    }

    // Método para criar algum Produto pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
        return await Produto.create(dados)
    }

    async update({params, request}: HttpContext){
        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
        
        produto.merge(dados)
        return await produto.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const produto = await Produto.findOrFail(params.id)

        await produto.delete()
        return { msg: 'Registro deletado com sucesso', produto }

    }
}
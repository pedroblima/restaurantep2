// import type { HttpContext } from '@adonisjs/core/http'

import Funcionario from "#models/funcionario";
import { HttpContext } from "@adonisjs/core/http";

export default class FuncionariosController {

    // Paginação de Funcionarios
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Funcionario.findOrFail(params.id)
    }

    // Método para criar algum Funcionario pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'endereco', 'sexo', 'telefone', 'cargoId'])
        return await Funcionario.create(dados)
    }

    async update({params, request}: HttpContext){
        const funcionarios = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'endereco', 'sexo', 'telefone', 'cargoId'])
        
        funcionarios.merge(dados)
        return await funcionarios.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const funcionarios = await Funcionario.findOrFail(params.id)

        await funcionarios.delete()
        return { msg: 'Registro deletado com sucesso', funcionarios }

    }
}
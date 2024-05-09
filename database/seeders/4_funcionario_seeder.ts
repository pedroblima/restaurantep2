import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {
        nome: 'João',
        cpf: '12345678901',
        endereco: 'Rua 1',
        sexo: 'M',
        telefone: '123456789'
      },
      {
        nome: 'Maria',
        cpf: '12345678902',
        endereco: 'Rua 2',
        sexo: 'F',
        telefone: '123456789'
      },
      {
        nome: 'José',
        cpf: '12345678903',
        endereco: 'Rua 3',
        sexo: 'M',
        telefone: '123456789'
      }
    ])
  }
}
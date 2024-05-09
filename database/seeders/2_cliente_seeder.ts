import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: 'João',
        cpf: '12345678901',
        telefone: '1234567890',
        email: 'joao'
      },
      {
        nome: 'Maria',
        cpf: '12345678902',
        telefone: '1234567891',
        email:'maria'
      },
      {
        nome: 'José',
        cpf: '12345678903',
        telefone: '1234567892',
        email: 'jose'
      },
      {
        nome: 'Pedro',
        cpf: '12345678904',
        telefone: '1234567893',
        email: 'pedro'
      },
      {
        nome: 'Ana',
        cpf: '12345678905',
        telefone: '1234567894',
        email: 'ana'
      }
    ])
  }
}
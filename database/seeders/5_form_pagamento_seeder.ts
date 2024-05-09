import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormPagamento from '../../app/models/form_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    await FormPagamento.createMany([
      {
        nome: 'Dinheiro'
      },
      {
        nome: 'Cartão de Crédito'
      },
      {
        nome: 'Cartão de Débito'
      },
      {
        nome: 'Cheque'
      },
      {
        nome: 'pix'
      }
    ])
  }
}
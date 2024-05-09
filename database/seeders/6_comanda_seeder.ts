import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
    await Comanda.createMany([
      {
        mesa: 'Mesa 1',
        funcionarios_id: 1,
        clientes_id: 1,
        form_pagamento_id: 1
      }
    ])
  }
}
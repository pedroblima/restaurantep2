import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([
      {
        nome: 'Gerente',
        
      },
      {
        nome: 'Cozinheiro',
      },
      {
        nome: 'Garçom',
      },
      {
        nome: 'Atendente',
      }

    ])
  }
}
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdIngrediente from '../../app/models/prod_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await ProdIngrediente.createMany([
      {
        produtos_id: 1,
        ingredientes_id: 1
      },
      {
        produtos_id: 1,
        ingredientes_id: 2
      },
      {
        produtos_id: 1,
        ingredientes_id: 3
      }
    ])
  }
}
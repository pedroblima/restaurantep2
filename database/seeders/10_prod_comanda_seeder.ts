import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdComanda from '../../app/models/prod_comanda.js'

export default class extends BaseSeeder {
  async run() {
   await ProdComanda.createMany([
    {
      produtos_id: 1,
      comandas_id: 1,
      quantidade: 1
    },
    {
      produtos_id: 2,
      comandas_id: 1,
      quantidade: 1
    },
    {
      produtos_id: 3,
      comandas_id: 1,
      quantidade: 1
    }
   ])
  }
}
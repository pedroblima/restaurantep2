import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tipo from '../../app/models/tipo.js'

export default class extends BaseSeeder {
  async run() {
    return await Tipo.createMany([
      {
        nome: 'Pizza'
      
    
      },
      {
        nome: 'Salada'
      },
      {
        nome: 'Acompanhamento'
      },
      {
        nome: 'Bebida'
    
      },
    ])
  }
}
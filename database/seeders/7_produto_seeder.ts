import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {
        id: 1,
        nome: 'Pizza Mussarela',
        preco: 20,
        tamanho: 'Grande',
        tipos_id: 1
      },
      { 
        id: 2,
        nome: 'Pizza Calabresa',
        preco: 20,
        tamanho: 'Grande',
        tipos_id: 1
      },
      {
        id: 3,
        nome: 'Pizza Portuguesa',
        preco: 20,
        tamanho: 'Grande',
        tipos_id: 1
      },
      {
        id: 4,
        nome: 'salada Frango Catupiry',
        preco: 20,
        tamanho: 'Grande',
        tipos_id: 2
      },
      {
        id: 5,
        nome: 'Salada Frango Catupiry',
        preco: 20,
        tamanho: 'Grande',
        tipos_id: 2
      }

    ])
  }
}
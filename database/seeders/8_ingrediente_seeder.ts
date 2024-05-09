import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {
        nome: 'Tomate'
      },
      {
        nome: 'Cebola'
      },
      {
        nome: 'Alface'
      },
      {
        nome: 'Bacon'
      },
      {
        nome: 'Ovo'
      },
      {
        nome: 'Queijo'
      },
      {
        nome: 'Presunto'
      },
      {
        nome: 'Mussarela'
      },
      {
        nome: 'Calabresa'
      },
      {
        nome: 'Pepperoni'
      },
      {
        nome: 'Frango'
      },
      {
        nome: 'Pimenta'
      },
      {
        nome: 'Manjericão'
      },
      {
        nome: 'Azeitona'
      },
      {
        nome: 'Alho'
      },
      {
        nome: 'Sal'
      },
      {
        nome: 'Oregano'
      },
    ])  
  }
}
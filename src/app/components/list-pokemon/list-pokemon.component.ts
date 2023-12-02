import { Component } from '@angular/core';
import { POKEMONS } from 'src/app/mocks/mock-pokemon';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  [x: string]: any;
  pokemonList: Pokemon[] = POKEMONS;
}

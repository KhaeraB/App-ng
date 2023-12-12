import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/app/mocks/mock-pokemon';
import { TypeColor } from 'src/app/model/enum/typesColors';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemonPage.component.html',
  styleUrls: ['./pokemonPage.component.scss'],
})
export class PokemonPageComponent {
  pokemonList: Pokemon[] = POKEMONS;
  enum: typeof TypeColor = TypeColor;
  selectPokemonName: string;

  getColorForType(type: string) {
    return (this.enum as any)[type] || 'transparent';
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectPokemonName = pokemon.name;
    return this.selectPokemonName;
  }
}

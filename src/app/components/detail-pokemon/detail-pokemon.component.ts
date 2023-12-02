import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/app/mocks/mock-pokemon';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id === +pokemonId,
      );
    } else {
      this.pokemon = undefined;
    }
  }
}

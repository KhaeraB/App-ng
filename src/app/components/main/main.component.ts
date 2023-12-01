import { Component, OnInit } from '@angular/core';
import { POKEMONS } from 'src/app/mocks/mock-pokemon';
import { TypeColor } from 'src/app/model/enum/typesColors';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  pokemonList : Pokemon[]= POKEMONS; 
  enum: typeof TypeColor = TypeColor; 
  selectPokemonName : string;

  ngOnInit(){
    
  }

  getColorForType(type: string) {
    return (this.enum as any)[type] || 'transparent';
  }

  getId(id : number){
    this.pokemonList.find(pokemon => {
      pokemon.id === id
    });  
    console.log(id); 
  }

  selectPokemon(pokemon : Pokemon){
    this.selectPokemonName = pokemon.name; 
    return this.selectPokemonName
  }
}

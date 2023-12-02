import { Pipe, PipeTransform } from '@angular/core';
import { TypeColor } from '../model/enum/typesColors';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    return TypeColor[type as keyof typeof TypeColor] || 'transparent';
  }
}

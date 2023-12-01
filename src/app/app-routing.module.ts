import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './components/pokemonPage/pokemonPage.component';

const routes: Routes = [
  {path : 'pokemon/:id', component : PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

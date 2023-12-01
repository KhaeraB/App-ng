import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PokemonPageComponent } from './components/pokemonPage/pokemonPage.component';
import { BorderCardDirective } from './directives/border-card.directive';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    PokemonPageComponent, 
    BorderCardDirective
],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

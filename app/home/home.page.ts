import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage implements OnInit {
  offset = 0;
  pokemon = [];

  contructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeService.getPokemon(this.offset).suscribe(res => {
      console.log('result: ', res);
      this.pokemon = res;
    })
  }
}
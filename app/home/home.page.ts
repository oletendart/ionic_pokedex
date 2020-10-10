import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage implements OnInit {
  offset = 0;
  
  contructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeService.getPokemon()
  }
}
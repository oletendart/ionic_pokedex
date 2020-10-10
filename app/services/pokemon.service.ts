import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})

export class PokemonService {
  baseUrl= "https://pokeapi.co/api/v2";
  imageUrl= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private http: HttpClient) {}

  getPokemon(offset = 0) {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`):
  }
}
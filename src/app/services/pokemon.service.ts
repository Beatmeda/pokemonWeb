import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
}

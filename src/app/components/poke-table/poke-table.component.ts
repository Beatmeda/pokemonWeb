import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit{

  displayedColumns: string[] = ['id', 'image', 'name', 'height', 'weight'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonService, private router: Router) { }
  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    let pokemonData;

    const pokemons = await this.pokemonService.getPokemons().subscribe(
      res => {
        console.log(res)
        pokemonData = {
          position: 1,
          image: res.sprites.front_default,
          name: res.name
        };
        this.data.push(pokemonData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
    console.log(pokemons);
  }
}

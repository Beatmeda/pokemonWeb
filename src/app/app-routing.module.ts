import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

const routes: Routes = [
  {path: 'pokemons', component: PokeTableComponent},
  {path: '', pathMatch: 'full', redirectTo: 'pokemons' },
  {path: '**', pathMatch: 'full', redirectTo: 'pokemons'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

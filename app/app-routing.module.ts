import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'fulll' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:index', loadChildren: './details/details.module#DetailsPageModule' },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
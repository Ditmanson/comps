import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';

const routes: Routes = [
  {
    path: 'home', component: ModsHomeComponent, pathMatch: 'full',
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: '../not-found', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }

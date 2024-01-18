import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', component: CollectionsHomeComponent,
    children: [
      {path: 'companies', component: CompaniesComponent},
      {path: 'partners', component: PartnersComponent},
      {path: 'biography', component: BiographyComponent},
      {path: '', redirectTo: 'biography', pathMatch: 'full'},
      {path: '**', redirectTo: 'biography', pathMatch: 'full'},

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }

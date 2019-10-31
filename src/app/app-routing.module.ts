import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
{path: 'produit' , component: ProduitComponent},
{path: 'dashboard' , component: DashboardComponent},
{path:'', redirectTo: 'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

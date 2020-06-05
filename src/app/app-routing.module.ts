import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyValuationComponent } from './components/company-valuation/company-valuation.component';


const routes: Routes = [
  { path: '', component: CompanyValuationComponent },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

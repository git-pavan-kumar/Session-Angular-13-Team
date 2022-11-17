import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponentComponent } from './chart-component/chart-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full'},  
  { path: 'chart', component: ChartComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class AnalyticsModuleRoutingModule { }

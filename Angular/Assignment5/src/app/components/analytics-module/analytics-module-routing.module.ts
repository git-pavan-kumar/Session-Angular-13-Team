import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ChartComponentComponent } from './chart-component/chart-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full'},  
  { path: 'chart', component: ChartComponentComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class AnalyticsModuleRoutingModule { }

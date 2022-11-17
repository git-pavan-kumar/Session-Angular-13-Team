import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsModuleRoutingModule } from './analytics-module-routing.module';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { NavModule } from 'src/app/shared/nav/nav.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    ChartComponentComponent
  ],
  imports: [
    CommonModule,
    AnalyticsModuleRoutingModule,
    NavModule,
    ChartModule
  ]
})
export class AnalyticsModuleModule { }

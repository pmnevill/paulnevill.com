import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatGridListModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatSidenavModule, MatStepperModule,
  MatToolbarModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

const matModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
  MatStepperModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    matModules,
    NgxChartsModule,
  ],
  exports: [
    matModules,
    FlexLayoutModule,
    NgxChartsModule,
  ],
  providers: [
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class CoreModule { }

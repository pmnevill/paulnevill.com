import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatSidenavModule, MatStepperModule,
  MatToolbarModule, MatTooltipModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

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
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModules,
    FlexLayoutModule,
  ],
  exports: [
    matModules,
    FlexLayoutModule,
  ]
})
export class SharedModule { }

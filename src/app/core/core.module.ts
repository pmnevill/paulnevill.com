import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatSidenavModule, MatStepperModule,
  MatToolbarModule, MatTooltipModule,
} from '@angular/material';

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
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    matModules,
    FlexLayoutModule,
  ],
  exports: [
    matModules,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

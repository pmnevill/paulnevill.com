import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume.component';

const resumeRoutes: Routes = [
  {
    path: '',
    component: ResumeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      resumeRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeRoutingModule {
}

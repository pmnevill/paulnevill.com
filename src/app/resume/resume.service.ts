import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as moment from 'moment';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private http: HttpClient,
  ) { }

  getSkills() {
    return <Observable<any[]>>this.http.get(`${environment.apiGatewayInvoke}/skills`);
  }

  getJobs() {
    return <Observable<any[]>>this.http.get(`${environment.apiGatewayInvoke}/work-history`);
  }

}

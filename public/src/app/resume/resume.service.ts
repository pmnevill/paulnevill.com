import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private http: HttpClient,
  ) { }

  getSkills() {
    return <Observable<any[]>>this.http.get('./api/skills');
  }

  getJobs() {
    return <Observable<any[]>>this.http.get('./api/jobs');
  }

}

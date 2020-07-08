import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = "http://localhost:57919/api/projects";


  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  getAllProjects1() {
    let response = [];
    return this.http.get<Project[]>(this.url).toPromise();

  }
}
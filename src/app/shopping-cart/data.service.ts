import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('../../assets/data.json')
    .map(response => response.json());
  }

}

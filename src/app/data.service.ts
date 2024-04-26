import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any;
  constructor(private http: HttpClient) {
    this.http.get('./assets/data.json').subscribe((jsonData) => {
      this.data = jsonData;
    });
  }
}

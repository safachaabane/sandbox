import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('autoHeight', [
      state(
        'open',
        style({
          height: 'auto',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'sandBoxApp';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('./assets/data.json').subscribe((jsonData) => {
      this.data = jsonData;
      console.log(jsonData);
    });
  }
}

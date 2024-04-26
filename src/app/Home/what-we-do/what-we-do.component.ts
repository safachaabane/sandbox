import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css',
})
export class WhatWeDoComponent {
  data: any;
  constructor(data: DataService) {
    this.data = data.data;
  }
}

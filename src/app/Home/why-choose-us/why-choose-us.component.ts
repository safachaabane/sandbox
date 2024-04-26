import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css',
})
export class WhyChooseUsComponent {
  data: any;
  constructor(data: DataService) {
    this.data = data.data;
  }
}

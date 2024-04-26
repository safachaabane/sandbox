import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css',
})
export class TestimonyComponent {
  testimonyOptions: any = {
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
}

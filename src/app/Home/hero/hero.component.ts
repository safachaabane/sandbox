import { Component } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
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
    nav: true,
  };
  constructor() {}
}

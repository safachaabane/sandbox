import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css',
})
export class CaseStudiesComponent {
  customOptions: any = {
    loop: true,
    margin: 0,
    dots: true,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  };
}

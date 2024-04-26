import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreWe1Component } from './what-are-we1.component';

describe('WhatAreWe1Component', () => {
  let component: WhatAreWe1Component;
  let fixture: ComponentFixture<WhatAreWe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatAreWe1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatAreWe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

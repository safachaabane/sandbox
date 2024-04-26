import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreWe2Component } from './what-are-we2.component';

describe('WhatAreWe2Component', () => {
  let component: WhatAreWe2Component;
  let fixture: ComponentFixture<WhatAreWe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatAreWe2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatAreWe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowAreWeComponent } from './how-are-we.component';

describe('HowAreWeComponent', () => {
  let component: HowAreWeComponent;
  let fixture: ComponentFixture<HowAreWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowAreWeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowAreWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedCarouselComponent } from './mixed-carousel.component';

describe('MixedCarouselComponent', () => {
  let component: MixedCarouselComponent;
  let fixture: ComponentFixture<MixedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

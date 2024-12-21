import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoptionComponent } from './navoption.component';

describe('NavoptionComponent', () => {
  let component: NavoptionComponent;
  let fixture: ComponentFixture<NavoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackComponent } from './backpack.component';

describe('BackpackComponent', () => {
  let component: BackpackComponent;
  let fixture: ComponentFixture<BackpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackpackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptorComponent } from './descriptor.component';

describe('DescriptorComponent', () => {
  let component: DescriptorComponent;
  let fixture: ComponentFixture<DescriptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

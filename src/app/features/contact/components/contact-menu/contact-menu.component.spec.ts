import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMenuComponent } from './contact-menu.component';

describe('ContactMenuComponent', () => {
  let component: ContactMenuComponent;
  let fixture: ComponentFixture<ContactMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

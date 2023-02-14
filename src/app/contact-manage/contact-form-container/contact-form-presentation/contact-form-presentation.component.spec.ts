import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormPresentationComponent } from './contact-form-presentation.component';

describe('ContactFormPresentationComponent', () => {
  let component: ContactFormPresentationComponent;
  let fixture: ComponentFixture<ContactFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

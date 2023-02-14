import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListPresentationComponent } from './contact-list-presentation.component';

describe('ContactListPresentationComponent', () => {
  let component: ContactListPresentationComponent;
  let fixture: ComponentFixture<ContactListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

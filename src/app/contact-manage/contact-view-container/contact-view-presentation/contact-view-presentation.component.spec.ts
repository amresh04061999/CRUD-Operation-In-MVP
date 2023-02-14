import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewPresentationComponent } from './contact-view-presentation.component';

describe('ContactViewPresentationComponent', () => {
  let component: ContactViewPresentationComponent;
  let fixture: ComponentFixture<ContactViewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactViewPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactViewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

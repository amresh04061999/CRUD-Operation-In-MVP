import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewContainerComponent } from './contact-view-container.component';

describe('ContactViewContainerComponent', () => {
  let component: ContactViewContainerComponent;
  let fixture: ComponentFixture<ContactViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactViewContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

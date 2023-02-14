import { TestBed } from '@angular/core/testing';

import { ContactViewPresenterService } from './contact-view-presenter.service';

describe('ContactViewPresenterService', () => {
  let service: ContactViewPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactViewPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

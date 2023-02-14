import { TestBed } from '@angular/core/testing';

import { ContactFormPresenterService } from './contact-form-presenter.service';

describe('ContactFormPresenterService', () => {
  let service: ContactFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ContactListPresenterService } from './contact-list-presenter.service';

describe('ContactListPresenterService', () => {
  let service: ContactListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetObjects } from './get-objects';

describe('GetObjects', () => {
  let service: GetObjects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetObjects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

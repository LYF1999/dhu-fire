/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterAccessService } from './router-access.service';

describe('Service: RouterAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterAccessService]
    });
  });

  it('should ...', inject([RouterAccessService], (service: RouterAccessService) => {
    expect(service).toBeTruthy();
  }));
});

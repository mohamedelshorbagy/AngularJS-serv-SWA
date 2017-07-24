import { TestBed, inject } from '@angular/core/testing';

import { JsonplaceService } from './jsonplace.service';

describe('JsonplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonplaceService]
    });
  });

  it('should ...', inject([JsonplaceService], (service: JsonplaceService) => {
    expect(service).toBeTruthy();
  }));
});

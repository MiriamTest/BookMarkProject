import { TestBed, inject } from '@angular/core/testing';

import { CreditCardService } from './creditCard.service';

describe('PaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardService]
    });
  });

  it('should be created', inject([CreditCardService], (service: CreditCardService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CominucacaoService } from './cominucacao.service';

describe('CominucacaoService', () => {
  let service: CominucacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CominucacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RologioComponent } from './rologio.component';

describe('RologioComponent', () => {
  let component: RologioComponent;
  let fixture: ComponentFixture<RologioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RologioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RologioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

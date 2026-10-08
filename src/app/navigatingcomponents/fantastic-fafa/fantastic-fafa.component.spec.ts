import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticFAFAComponent } from './fantastic-fafa.component';

describe('FantasticFAFAComponent', () => {
  let component: FantasticFAFAComponent;
  let fixture: ComponentFixture<FantasticFAFAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasticFAFAComponent]
    });
    fixture = TestBed.createComponent(FantasticFAFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

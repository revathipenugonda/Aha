import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebratingloveComponent } from './celebratinglove.component';

describe('CelebratingloveComponent', () => {
  let component: CelebratingloveComponent;
  let fixture: ComponentFixture<CelebratingloveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelebratingloveComponent]
    });
    fixture = TestBed.createComponent(CelebratingloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

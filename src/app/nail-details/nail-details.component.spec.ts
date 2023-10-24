import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailDetailsComponent } from './nail-details.component';

describe('NailDetailsComponent', () => {
  let component: NailDetailsComponent;
  let fixture: ComponentFixture<NailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NailDetailsComponent]
    });
    fixture = TestBed.createComponent(NailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

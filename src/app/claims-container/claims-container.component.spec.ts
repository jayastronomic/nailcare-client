import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsContainerComponent } from './claims-container.component';

describe('ClaimsContainerComponent', () => {
  let component: ClaimsContainerComponent;
  let fixture: ComponentFixture<ClaimsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsContainerComponent]
    });
    fixture = TestBed.createComponent(ClaimsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

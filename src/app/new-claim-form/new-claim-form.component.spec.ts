import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClaimFormComponent } from './new-claim-form.component';

describe('NewClaimFormComponent', () => {
  let component: NewClaimFormComponent;
  let fixture: ComponentFixture<NewClaimFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClaimFormComponent]
    });
    fixture = TestBed.createComponent(NewClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

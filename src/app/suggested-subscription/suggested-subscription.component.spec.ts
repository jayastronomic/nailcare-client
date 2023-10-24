import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedSubscriptionComponent } from './suggested-subscription.component';

describe('SuggestedSubscriptionComponent', () => {
  let component: SuggestedSubscriptionComponent;
  let fixture: ComponentFixture<SuggestedSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedSubscriptionComponent]
    });
    fixture = TestBed.createComponent(SuggestedSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

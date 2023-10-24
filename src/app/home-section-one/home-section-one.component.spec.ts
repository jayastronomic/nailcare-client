import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionOneComponent } from './home-section-one.component';

describe('HomeSectionOneComponent', () => {
  let component: HomeSectionOneComponent;
  let fixture: ComponentFixture<HomeSectionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionOneComponent]
    });
    fixture = TestBed.createComponent(HomeSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

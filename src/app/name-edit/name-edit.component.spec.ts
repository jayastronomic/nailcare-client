import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditComponent } from './name-edit.component';

describe('NameEditComponent', () => {
  let component: NameEditComponent;
  let fixture: ComponentFixture<NameEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameEditComponent]
    });
    fixture = TestBed.createComponent(NameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

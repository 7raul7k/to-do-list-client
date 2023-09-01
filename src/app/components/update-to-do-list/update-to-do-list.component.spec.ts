import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToDoListComponent } from './update-to-do-list.component';

describe('UpdateToDoListComponent', () => {
  let component: UpdateToDoListComponent;
  let fixture: ComponentFixture<UpdateToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateToDoListComponent]
    });
    fixture = TestBed.createComponent(UpdateToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoListComponent } from './new-to-do-list.component';

describe('NewToDoListComponent', () => {
  let component: NewToDoListComponent;
  let fixture: ComponentFixture<NewToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewToDoListComponent]
    });
    fixture = TestBed.createComponent(NewToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

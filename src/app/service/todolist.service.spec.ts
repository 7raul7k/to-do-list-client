import { TestBed } from '@angular/core/testing';

import { TodolistService } from './todolist.service';

describe('TodolistServiceService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

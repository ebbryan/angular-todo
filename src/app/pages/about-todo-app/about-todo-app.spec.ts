import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTodoApp } from './about-todo-app';

describe('AboutTodoApp', () => {
  let component: AboutTodoApp;
  let fixture: ComponentFixture<AboutTodoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTodoApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTodoApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

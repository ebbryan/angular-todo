import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodos } from './my-todos';

describe('MyTodos', () => {
  let component: MyTodos;
  let fixture: ComponentFixture<MyTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleQuestionComponent } from './module-question.component';

describe('ModuleQuestionComponent', () => {
  let component: ModuleQuestionComponent;
  let fixture: ComponentFixture<ModuleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

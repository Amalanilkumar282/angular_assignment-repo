import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CreateEpic } from './create-epic';

describe('CreateEpic', () => {
  let component: CreateEpic;
  let fixture: ComponentFixture<CreateEpic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEpic],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEpic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

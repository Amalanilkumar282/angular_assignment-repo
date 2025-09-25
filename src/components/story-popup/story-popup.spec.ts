import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { StoryPopup } from './story-popup';

describe('StoryPopup', () => {
  let component: StoryPopup;
  let fixture: ComponentFixture<StoryPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryPopup],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

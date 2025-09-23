import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPopup } from './story-popup';

describe('StoryPopup', () => {
  let component: StoryPopup;
  let fixture: ComponentFixture<StoryPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryPopup]
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

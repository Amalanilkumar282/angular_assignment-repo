import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { EpicView } from './epic-view';

describe('EpicView', () => {
  let component: EpicView;
  let fixture: ComponentFixture<EpicView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpicView],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

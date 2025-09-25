import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { EpicPanel } from './epic-panel';

describe('EpicPanel', () => {
  let component: EpicPanel;
  let fixture: ComponentFixture<EpicPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpicPanel],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

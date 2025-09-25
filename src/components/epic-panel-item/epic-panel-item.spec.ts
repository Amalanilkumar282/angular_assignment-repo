import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { EpicPanelItem } from './epic-panel-item';

describe('EpicPanelItem', () => {
  let component: EpicPanelItem;
  let fixture: ComponentFixture<EpicPanelItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpicPanelItem],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicPanelItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

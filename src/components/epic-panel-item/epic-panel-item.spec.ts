import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicPanelItem } from './epic-panel-item';

describe('EpicPanelItem', () => {
  let component: EpicPanelItem;
  let fixture: ComponentFixture<EpicPanelItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpicPanelItem]
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

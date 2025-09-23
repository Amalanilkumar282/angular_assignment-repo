import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicPanel } from './epic-panel';

describe('EpicPanel', () => {
  let component: EpicPanel;
  let fixture: ComponentFixture<EpicPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpicPanel]
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

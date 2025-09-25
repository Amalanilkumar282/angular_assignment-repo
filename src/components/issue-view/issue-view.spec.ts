import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { IssueView } from './issue-view';

describe('IssueView', () => {
  let component: IssueView;
  let fixture: ComponentFixture<IssueView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueView],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

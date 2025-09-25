import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { IssueList } from './issue-list';

describe('IssueList', () => {
  let component: IssueList;
  let fixture: ComponentFixture<IssueList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueList],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

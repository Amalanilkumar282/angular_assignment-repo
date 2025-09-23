import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprintContainerComponent } from './sprint-container';

describe('SprintContainerComponent', () => {
  let component: SprintContainerComponent;
  let fixture: ComponentFixture<SprintContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Your backlog is empty." when workItemsCount is 0', () => {
    component.workItemsCount = 0;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.backlog-empty-message')?.textContent).toContain('Your backlog is empty.');
  });

  it('should display the correct work items count', () => {
    component.workItemsCount = 5;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.work-items')?.textContent).toContain('(5 work items)');
  });

  it('should call onCreateSprint when the "Create sprint" button is clicked', () => {
    spyOn(component, 'onCreateSprint');
    const createSprintButton = fixture.debugElement.nativeElement.querySelector('.create-sprint-button');
    createSprintButton.click();
    expect(component.onCreateSprint).toHaveBeenCalled();
  });

  it('should call onCreateWorkItem when the "Create" button is clicked', () => {
    spyOn(component, 'onCreateWorkItem');
    const createWorkItemButton = fixture.debugElement.nativeElement.querySelector('.create-button');
    createWorkItemButton.click();
    expect(component.onCreateWorkItem).toHaveBeenCalled();
  });
});
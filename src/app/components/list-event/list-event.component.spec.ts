import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEventComponent } from './list-event.component';

describe('ListEventComponent', () => {
  let component: ListEventComponent;
  let fixture: ComponentFixture<ListEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListEventComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventComponent);
    fixture.componentRef.setInput('event', {
      title: 'Test Event',
      description: 'Test Description',
      startDateTime: '2026-01-01T10:00:00',
      endDateTime: '2026-01-01T12:00:00',
      location: 'Test Location'
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

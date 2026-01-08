import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedEventComponent } from './featured-event.component';

describe('FeaturedEventComponent', () => {
  let component: FeaturedEventComponent;
  let fixture: ComponentFixture<FeaturedEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedEventComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEventComponent);
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

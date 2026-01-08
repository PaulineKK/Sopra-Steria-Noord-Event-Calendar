import { Component, computed, signal } from '@angular/core';
import { FeaturedEventComponent } from '../featured-event/featured-event.component';
import { ListEventComponent } from '../list-event/list-event.component';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [FeaturedEventComponent, ListEventComponent],
})
export class HomepageComponent {
  featuredEvents = computed(() => this.eventsService.events().slice(0, 5));

  loopedEvent = computed(() => {
    const events = this.featuredEvents();
    return events.length ? events[this.currentEventIndex()] : null;
  });

  private readonly currentEventIndex = signal(1);

  constructor(private readonly eventsService: EventsService) {
    this.eventsService.loadEvents();

    setInterval(() => {
      const events = this.featuredEvents();
      if (events.length <= 1) {
        return;
      }

      this.currentEventIndex.update((i) => {
        const next = i + 1;
        return next < events.length ? next : 1;
      });
    }, 5000);
  }
}

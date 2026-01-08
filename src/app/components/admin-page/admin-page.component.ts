import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ListEventComponent } from '../list-event/list-event.component';
import { EventItem } from '../../event.model';
import { NewEventComponent } from '../new-event/new-event.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  imports: [ListEventComponent, NewEventComponent],
})
export class AdminPageComponent {
  events: Signal<EventItem[]>;
  showForm: WritableSignal<boolean> = signal(false);

  constructor(private readonly eventsService: EventsService) {
    this.eventsService.loadEvents();
    this.events = this.eventsService.events;
  }

  onAddEvent() {
    this.showForm.set(true);
  }
}

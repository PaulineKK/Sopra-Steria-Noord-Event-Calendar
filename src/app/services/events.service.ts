import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { EventItem, EventPostDto } from '../event.model';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly _events = signal<EventItem[]>([]);
  readonly events = this._events.asReadonly();

  constructor(private readonly http: HttpClient) {}

  loadEvents(): void {
    this.http.get<EventItem[]>('/api/events').subscribe({
      next: (events) => {
        const sorted = events.slice().sort((a, b) => {
          return new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime();
        });

        this._events.set(sorted);
      },
      error: (err) => console.error(err),
    });
  }

  addEvent(postData: EventPostDto) {
    return this.http.post<EventItem>('/api/events', postData).pipe(
      tap((newEvent) => {
        console.log('Event added successfully:', newEvent);
        this._events.update((events) =>
          [...events, newEvent].sort(
            (a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime()
          )
        );
        console.log('Updated events list:', this._events());
      }),
      catchError((err) => {
        console.error('Failed to add event:', err);
        return of(null);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import events from '../events.mock.json';
import { Category, EventItem } from '../event.model';

@Injectable()
export class MockEventsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/events') {
      if (req.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: events }));
      }

      if (req.method === 'POST') {
        const body = req.body as Partial<EventItem>;

        const newEvent: EventItem = {
          id: (events.length + 1).toString(),
          title: body.title || '',
          description: body.description || '',
          category: body.category as Category,
          startDateTime: body.startDateTime || new Date().toISOString(),
          endDateTime: body.endDateTime || new Date().toISOString(),
          location: body.location || '',
          qrCode: body.qrCode,
        };

        events.push(newEvent);

        return of(new HttpResponse({ status: 201, body: newEvent }));
      }
    }

    return next.handle(req);
  }
}

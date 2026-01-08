import { Component, input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventItem } from '../../event.model';
import { getCategoryIcon } from '../../helpers/icon-helper.helper';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss'],
  imports: [DatePipe],
})
export class ListEventComponent implements OnInit {
  event = input.required<EventItem>();
  isFeatured = input<boolean>();

  getIconClass(category: string) {
    return getCategoryIcon(category);
  }

  ngOnInit(): void {
    console.log('ListEventComponent initialized with event:', this.event());
  }
}

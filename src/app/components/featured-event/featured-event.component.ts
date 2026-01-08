import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';
import { EventItem } from '../../event.model';
import { getCategoryIcon } from '../../helpers/icon-helper.helper';

@Component({
  selector: 'app-featured-event',
  templateUrl: './featured-event.component.html',
  styleUrls: ['./featured-event.component.scss'],
  imports: [DatePipe, QRCodeComponent],
})
export class FeaturedEventComponent {
  event = input.required<EventItem>();

  getIconClass(category: string) {
    return getCategoryIcon(category);
  }
}

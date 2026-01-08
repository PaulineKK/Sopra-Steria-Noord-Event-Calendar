import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../event.model';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class NewEventComponent implements OnInit {
  @Output() closeForm = new EventEmitter<void>();
  eventForm!: FormGroup;
  categories = Object.values(Category);

  constructor(private readonly fb: FormBuilder, private readonly eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      location: ['', Validators.required],
      qrCode: [''],
    });
  }

  submitForm() {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const data = this.eventForm.value;
    this.eventsService.addEvent(data).subscribe({
      next: () => {
        this.closeForm.emit();
      },
      error: (err) => console.error('Error adding event:', err),
    });
  }
}

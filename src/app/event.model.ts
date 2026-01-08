export interface EventItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  startDateTime: string;
  endDateTime: string;
  location: string;
  qrCode?: string;
}

export enum Category {
  Training = 'Training',
  Fun = 'Fun',
  Informative = 'Informative',
  Business = 'Business',
  External = 'External',
  Special = 'Special',
}

export interface EventPostDto {
  category: Category;
  description: string;
  endDateTime: string;
  location: string;
  qrCode?: string;
  startDateTime: string;
  title: string;
}

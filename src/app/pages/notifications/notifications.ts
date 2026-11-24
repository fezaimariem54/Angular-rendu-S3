import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  afficher: boolean = false;
  notifications: string[] = [
    'Nouvelle conférence ajoutée',
    'Votre inscription est confirmée'
  ];

  toggle(): void {
    this.afficher = !this.afficher;
  }
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './sharedcomponent/header/header';
import { Home } from './pages/home/home';
import { Footer } from './sharedcomponent/footer/footer';
import { ListCof } from './pages/list-cof/list-cof';
import { Menu } from './sharedcomponent/menu/menu';
import { Profil } from './pages/profil/profil';
import { Amis } from './pages/amis/amis';
import { Notifications } from './pages/notifications/notifications';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , Home , Footer, ListCof, Menu, Profil, Amis, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projet');
}

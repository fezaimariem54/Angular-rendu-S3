import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string;
  state: boolean;
  constructor() {
    this.title = 'Home 4DAS 10';
    this.state = false;
  }
  ngOnInit(): void {

}
change(): void {
  this.title = 'Home 4DAS 9';
  this.state = true;
}
}
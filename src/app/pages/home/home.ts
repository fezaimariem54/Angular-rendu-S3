import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   title: string;
   list: Conference[];
   SearchTitle: string ;
   //cycle de v 

   constructor() {
     //services
   }

   ngOnInit() {
     this.list = [
       {
         title: "conference angular",
         description: "web dev conference and workshop",
          date: "12-06-2026",
          nbrMax: 20,
          nbrReservation: 19,
          picture: "https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp"
       },
     
       {
         title: "conference react",
         description: "web dev conference and workshop",
          date: "12-06-2026",
          nbrMax: 20,
          nbrReservation: 20,
          picture: "https://reactnative.dev/img/logo-share.png"
       }

      ]
   }
   participate(conf:Conference):void{
      conf.nbrReservation++;
  }
}